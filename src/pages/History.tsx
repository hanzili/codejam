import React, { useEffect, useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { useSupabaseUser } from '../hooks/useSupabase';
import { getUserOutfits, type Outfit } from '../lib/supabase';
import OutfitSet from '../components/OutfitSet';
import { generateOutfit } from '../utils/outfitGenerator';

const History = () => {
  const { user } = useSupabaseUser();
  const [outfits, setOutfits] = useState<Outfit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOutfits() {
      if (!user) return;

      try {
        const userOutfits = await getUserOutfits(user.id);
        setOutfits(userOutfits);
      } catch (error) {
        console.error('Error loading outfits:', error);
      } finally {
        setLoading(false);
      }
    }

    loadOutfits();
  }, [user]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Outfit History</h1>
          <p className="text-gray-600 mt-2">Your previous outfit recommendations</p>
        </div>
        <button 
          onClick={() => window.location.href = '/recommendations'}
          className="flex items-center space-x-2 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
        >
          <span>New Outfit</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      {outfits.length > 0 ? (
        <div className="space-y-8">
          {outfits.map((record) => {
            // Regenerate the outfit based on stored preferences
            const generatedOutfit = generateOutfit({
              occasion: record.occasion,
              style: record.style,
              season: record.season
            });

            if (!generatedOutfit) return null;

            return (
              <div key={record.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{new Date(record.created_at).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg mb-6">
                    <div>
                      <span className="font-medium">Occasion:</span>
                      <span className="ml-2 text-gray-600 capitalize">{record.occasion}</span>
                    </div>
                    <div>
                      <span className="font-medium">Style:</span>
                      <span className="ml-2 text-gray-600 capitalize">{record.style}</span>
                    </div>
                    <div>
                      <span className="font-medium">Season:</span>
                      <span className="ml-2 text-gray-600 capitalize">{record.season}</span>
                    </div>
                  </div>
                  
                  <OutfitSet {...generatedOutfit} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl shadow-md">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No outfit history yet</h2>
            <p className="text-gray-600 mb-6">Get started by creating your first outfit recommendation</p>
            <button
              onClick={() => window.location.href = '/recommendations'}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
            >
              <span>Create First Outfit</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;