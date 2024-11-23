import React from 'react';
import { Palette, Sparkles, ThumbsUp, AlertTriangle } from 'lucide-react';

interface ColorReportProps {
  season: string;
  undertone: string;
  colors: string[];
  description: string;
  date: string;
  userImage?: string;
}

const ColorReport: React.FC<ColorReportProps> = ({ season, undertone, colors, description, date, userImage }) => {
  // Additional personalized recommendations based on season
  const recommendations = {
    Spring: {
      metals: ['Gold', 'Brass', 'Copper'],
      patterns: ['Floral', 'Geometric', 'Watercolor'],
      makeup: ['Peach blush', 'Warm coral lipstick', 'Golden bronzer'],
      avoid: ['Black', 'Navy', 'Gray', 'Heavy fabrics']
    },
    Summer: {
      metals: ['Silver', 'White gold', 'Platinum'],
      patterns: ['Soft florals', 'Subtle stripes', 'Pastel prints'],
      makeup: ['Rose blush', 'Mauve lipstick', 'Cool pink tones'],
      avoid: ['Orange', 'Bright yellow', 'Heavy contrasts']
    },
    Autumn: {
      metals: ['Bronze', 'Copper', 'Antique gold'],
      patterns: ['Animal prints', 'Paisley', 'Nature-inspired'],
      makeup: ['Terracotta blush', 'Brick red lipstick', 'Bronze eyeshadow'],
      avoid: ['Pastels', 'Neon colors', 'Cool blues']
    },
    Winter: {
      metals: ['Silver', 'White gold', 'Platinum'],
      patterns: ['Bold geometrics', 'Abstract', 'High contrast prints'],
      makeup: ['Clear red lipstick', 'Cool pink blush', 'Jewel-toned eyeshadow'],
      avoid: ['Muted tones', 'Beige', 'Warm browns']
    }
  };

  const seasonRec = recommendations[season as keyof typeof recommendations];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Palette className="h-8 w-8 text-rose-500 mr-3" />
          <div>
            <h2 className="text-2xl font-semibold">Your Color Analysis</h2>
            <p className="text-sm text-gray-500">
              Analysis date: {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>

        {userImage && (
          <div className="mb-8">
            <h3 className="font-medium text-gray-900 mb-3">Your Photo</h3>
            <div className="relative">
              <img
                src={userImage}
                alt="Your analysis photo"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 rounded-b-lg">
                <p className="text-white text-sm">This photo was used for your color analysis</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Your Season</h3>
            <p className="text-2xl text-rose-500 font-semibold">{season}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Your Undertone</h3>
            <p className="text-2xl text-rose-500 font-semibold">{undertone}</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-medium text-gray-900 mb-4">Your Power Colors</h3>
          <div className="grid grid-cols-6 gap-3">
            {colors.map((color, index) => (
              <div key={index} className="space-y-2">
                <div
                  className="w-full h-16 rounded-lg shadow-md"
                  style={{ backgroundColor: color }}
                />
                <p className="text-xs text-center text-gray-500">{color}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <h3 className="font-medium text-gray-900 mb-2 flex items-center">
            <Sparkles className="h-5 w-5 text-rose-500 mr-2" />
            Your Color Profile
          </h3>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="font-medium text-gray-900 mb-3 flex items-center">
              <ThumbsUp className="h-5 w-5 text-rose-500 mr-2" />
              Best Choices for You
            </h3>
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-gray-700">Best Metals</p>
                <p className="text-sm text-gray-600">{seasonRec.metals.join(', ')}</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-gray-700">Flattering Patterns</p>
                <p className="text-sm text-gray-600">{seasonRec.patterns.join(', ')}</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-gray-700">Makeup Recommendations</p>
                <p className="text-sm text-gray-600">{seasonRec.makeup.join(', ')}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-3 flex items-center">
              <AlertTriangle className="h-5 w-5 text-rose-500 mr-2" />
              Colors to Avoid
            </h3>
            <div className="bg-rose-50 p-4 rounded-lg">
              <ul className="text-sm text-gray-600 space-y-2">
                {seasonRec.avoid.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 text-rose-500 border border-rose-500 rounded-md hover:bg-rose-50"
          >
            Save Report
          </button>
          <button
            onClick={() => window.location.href = '/recommendations'}
            className="px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600"
          >
            Get Outfit Recommendations
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorReport;