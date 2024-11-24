import React, { useState, useEffect } from 'react';
import { generateOutfit } from '../utils/outfitGenerator';
import { useSupabaseUser } from '../hooks/useSupabase';
import { saveOutfit } from '../lib/supabase';
import OutfitSet from './OutfitSet';
import PreferencesForm from './PreferencesForm';

const OutfitGenerator = () => {
  const { user } = useSupabaseUser();
  const [preferences, setPreferences] = useState({
    occasion: '',
    style: '',
    season: '',
    useSeasonalColors: true
  });
  const [outfit, setOutfit] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [noOutfitsFound, setNoOutfitsFound] = useState(false);

  useEffect(() => {
    if (user?.season) {
      setPreferences(prev => ({
        ...prev,
        season: user.season.toLowerCase()
      }));
    }
  }, [user]);

  const handleGenerate = async () => {
    if (!user) return;

    setIsGenerating(true);
    setNoOutfitsFound(false);
    
    // Generate outfit with seasonal preferences
    const newOutfit = generateOutfit({
      ...preferences,
      season: preferences.season
    });

    // Save outfit selection to Supabase
    if (newOutfit) {
      await saveOutfit(user.id, {
        user_id: user.id,
        occasion: preferences.occasion,
        style: preferences.style,
        season: preferences.season
      });
    }

    // Simulate API delay
    setTimeout(() => {
      if (newOutfit && newOutfit.items.length > 0) {
        setOutfit(newOutfit);
      } else {
        setNoOutfitsFound(true);
      }
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <div className="space-y-8">
      {!outfit ? (
        <PreferencesForm
          preferences={preferences}
          onChange={setPreferences}
          onSubmit={handleGenerate}
          userSeason={user?.season}
        />
      ) : (
        <div className="space-y-8">
          <OutfitSet {...outfit} />
          <div className="flex justify-end">
            <button
              onClick={() => {
                setOutfit(null);
                setNoOutfitsFound(false);
              }}
              className="px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
            >
              Generate Another Outfit
            </button>
          </div>
        </div>
      )}
      
      {noOutfitsFound && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800">
          <p className="text-center">
            No outfits found matching your preferences. Try adjusting your selections.
          </p>
        </div>
      )}
      
      {isGenerating && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto" />
            <p className="mt-4 text-gray-600 text-center">Curating your perfect outfit...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OutfitGenerator;