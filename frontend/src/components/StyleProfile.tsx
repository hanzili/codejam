import React, { useState } from 'react';
import { Save } from 'lucide-react';

interface StylePreferences {
  style: string[];
  budget: string;
  occasions: string[];
  bodyType: string;
  height: string;
  accessories: string[];
}

const StyleProfile = () => {
  const [preferences, setPreferences] = useState<StylePreferences>({
    style: [],
    budget: 'medium',
    occasions: [],
    bodyType: '',
    height: '',
    accessories: []
  });

  const styleOptions = ['Minimalist', 'Classic', 'Bohemian', 'Streetwear', 'Elegant', 'Casual'];
  const occasionOptions = ['Work', 'Casual', 'Evening', 'Special Events', 'Date Night', 'Travel'];
  const bodyTypes = ['Hourglass', 'Rectangle', 'Triangle', 'Inverted Triangle', 'Round'];
  const accessoryTypes = ['Jewelry', 'Bags', 'Scarves', 'Hats', 'Belts', 'Watches'];

  const handleMultiSelect = (category: keyof StylePreferences, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Style Profile</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Styles</label>
          <div className="flex flex-wrap gap-2">
            {styleOptions.map(style => (
              <button
                key={style}
                onClick={() => handleMultiSelect('style', style)}
                className={`px-4 py-2 rounded-full text-sm ${
                  preferences.style.includes(style)
                    ? 'bg-rose-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
          <select
            value={preferences.budget}
            onChange={(e) => setPreferences(prev => ({ ...prev, budget: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
          >
            <option value="budget">Budget ($)</option>
            <option value="medium">Medium ($$)</option>
            <option value="premium">Premium ($$$)</option>
            <option value="luxury">Luxury ($$$$)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Occasions</label>
          <div className="flex flex-wrap gap-2">
            {occasionOptions.map(occasion => (
              <button
                key={occasion}
                onClick={() => handleMultiSelect('occasions', occasion)}
                className={`px-4 py-2 rounded-full text-sm ${
                  preferences.occasions.includes(occasion)
                    ? 'bg-rose-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {occasion}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Body Type</label>
          <div className="flex flex-wrap gap-2">
            {bodyTypes.map(type => (
              <button
                key={type}
                onClick={() => setPreferences(prev => ({ ...prev, bodyType: type }))}
                className={`px-4 py-2 rounded-full text-sm ${
                  preferences.bodyType === type
                    ? 'bg-rose-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
          <input
            type="text"
            value={preferences.height}
            onChange={(e) => setPreferences(prev => ({ ...prev, height: e.target.value }))}
            placeholder="Enter your height (cm)"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Accessories</label>
          <div className="flex flex-wrap gap-2">
            {accessoryTypes.map(accessory => (
              <button
                key={accessory}
                onClick={() => handleMultiSelect('accessories', accessory)}
                className={`px-4 py-2 rounded-full text-sm ${
                  preferences.accessories.includes(accessory)
                    ? 'bg-rose-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {accessory}
              </button>
            ))}
          </div>
        </div>

        <button
          className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-500 hover:bg-rose-600"
        >
          <Save className="h-5 w-5" />
          <span>Save Preferences</span>
        </button>
      </div>
    </div>
  );
};

export default StyleProfile;