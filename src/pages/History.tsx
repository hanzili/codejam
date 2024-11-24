import React, { useEffect, useState } from 'react';
import { Clock, ArrowRight, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSupabaseUser } from '../hooks/useSupabase';
import { getUserOutfits, type Outfit } from '../lib/supabase';
import OutfitSet from '../components/OutfitSet';
import { generateOutfit } from '../utils/outfitGenerator';

interface Filters {
  occasion?: string;
  style?: string;
  season?: string;
}

const ITEMS_PER_PAGE = 2;

const History = () => {
  const { user } = useSupabaseUser();
  const [outfits, setOutfits] = useState<Outfit[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>({});
  const [currentPage, setCurrentPage] = useState(1);

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

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const filteredOutfits = outfits.filter(outfit => {
    return (
      (!filters.occasion || outfit.occasion.toLowerCase() === filters.occasion.toLowerCase()) &&
      (!filters.style || outfit.style.toLowerCase() === filters.style.toLowerCase()) &&
      (!filters.season || outfit.season.toLowerCase() === filters.season.toLowerCase())
    );
  });

  const uniqueValues = {
    occasions: [...new Set(outfits.map(o => o.occasion))],
    styles: [...new Set(outfits.map(o => o.style))],
    seasons: [...new Set(outfits.map(o => o.season))]
  };

  const clearFilters = () => {
    setFilters({});
    setCurrentPage(1);
  };

  // Pagination
  const totalPages = Math.ceil(filteredOutfits.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentOutfits = filteredOutfits.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="font-medium text-gray-700">Filters</span>
          </div>
          {Object.keys(filters).length > 0 && (
            <button
              onClick={clearFilters}
              className="text-sm text-rose-500 hover:text-rose-600 flex items-center space-x-1"
            >
              <X className="h-4 w-4" />
              <span>Clear all</span>
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-4">
          <select
            value={filters.occasion || ''}
            onChange={(e) => setFilters(f => ({ ...f, occasion: e.target.value || undefined }))}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="">All Occasions</option>
            {uniqueValues.occasions.map(occasion => (
              <option key={occasion} value={occasion}>
                {occasion.charAt(0).toUpperCase() + occasion.slice(1)}
              </option>
            ))}
          </select>
          <select
            value={filters.style || ''}
            onChange={(e) => setFilters(f => ({ ...f, style: e.target.value || undefined }))}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="">All Styles</option>
            {uniqueValues.styles.map(style => (
              <option key={style} value={style}>
                {style.charAt(0).toUpperCase() + style.slice(1)}
              </option>
            ))}
          </select>
          <select
            value={filters.season || ''}
            onChange={(e) => setFilters(f => ({ ...f, season: e.target.value || undefined }))}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="">All Seasons</option>
            {uniqueValues.seasons.map(season => (
              <option key={season} value={season}>
                {season.charAt(0).toUpperCase() + season.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredOutfits.length > 0 ? (
        <>
          <div className="space-y-8">
            {currentOutfits.map((record) => {
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
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm bg-gray-50 p-4 rounded-lg mb-6">
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center items-center space-x-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === page
                        ? 'bg-rose-500 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl shadow-md">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {Object.keys(filters).length > 0 
                ? 'No outfits match your filters'
                : 'No outfit history yet'}
            </h2>
            <p className="text-gray-600 mb-6">
              {Object.keys(filters).length > 0 
                ? 'Try adjusting your filters or clear them to see all outfits'
                : 'Get started by creating your first outfit recommendation'}
            </p>
            {Object.keys(filters).length > 0 ? (
              <button
                onClick={clearFilters}
                className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-rose-500 text-rose-500 rounded-lg hover:bg-rose-50 transition-colors"
              >
                <X className="h-5 w-5" />
                <span>Clear Filters</span>
              </button>
            ) : (
              <button
                onClick={() => window.location.href = '/recommendations'}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
              >
                <span>Create First Outfit</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default History;