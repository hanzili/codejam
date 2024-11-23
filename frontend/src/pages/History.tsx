import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import OutfitSet from '../components/OutfitSet';

const History = () => {
  // Mock data for demonstration
  const outfitHistory = [
    {
      date: "2024-03-16",
      preferences: {
        occasion: "Business Meeting",
        style: "Classic & Timeless",
        priceRange: "Moderate ($$)",
        useSeasonalColors: true
      },
      outfit: {
        id: 1,
        title: "Classic Business Ensemble",
        occasion: "Work",
        totalPrice: 850,
        items: [
          {
            type: "Blazer",
            name: "Classic Fitted Blazer",
            brand: "Theory",
            price: 425,
            image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f",
            color: "Navy"
          },
          {
            type: "Blouse",
            name: "Silk Button-Up",
            brand: "Equipment",
            price: 220,
            image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f",
            color: "White"
          },
          {
            type: "Pants",
            name: "Tailored Trousers",
            brand: "Hugo Boss",
            price: 295,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
            color: "Navy"
          },
          {
            type: "Accessories",
            name: "Leather Pumps",
            brand: "Stuart Weitzman",
            price: 375,
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
            color: "Black"
          }
        ]
      }
    }
  ];

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

      {outfitHistory.length > 0 ? (
        <div className="space-y-8">
          {outfitHistory.map((record, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{new Date(record.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg mb-6">
                  <div>
                    <span className="font-medium">Occasion:</span>
                    <span className="ml-2 text-gray-600">{record.preferences.occasion}</span>
                  </div>
                  <div>
                    <span className="font-medium">Style:</span>
                    <span className="ml-2 text-gray-600">{record.preferences.style}</span>
                  </div>
                  <div>
                    <span className="font-medium">Price Range:</span>
                    <span className="ml-2 text-gray-600">{record.preferences.priceRange}</span>
                  </div>
                  <div>
                    <span className="font-medium">Used Seasonal Colors:</span>
                    <span className="ml-2 text-gray-600">
                      {record.preferences.useSeasonalColors ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
                
                <OutfitSet {...record.outfit} />
              </div>
            </div>
          ))}
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