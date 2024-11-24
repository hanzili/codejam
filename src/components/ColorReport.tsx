import React from 'react';
import { Palette, Sparkles, Camera, AlertTriangle, Gem, ThumbsUp } from 'lucide-react';

interface ColorReportProps {
  season: string;
  undertone: string;
  colors: string[];
  description: string;
  date: string;
  userImage?: string;
  characteristics?: {
    skinTone: string;
    eyeColor: string;
    hairColor: string;
    contrastLevel: string;
  };
  customRecommendations?: {
    bestColors: string[];
    worstColors: string[];
    specificTips: string[];
  };
  personalizedDescription?: string;
}

const ColorReport: React.FC<ColorReportProps> = ({
  season,
  undertone,
  colors,
  description,
  date,
  userImage,
  characteristics,
  customRecommendations,
  personalizedDescription
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-[95vw] mx-auto">
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center mb-8">
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Photo and Basic Info */}
            <div className="grid md:grid-cols-2 gap-4">
              {userImage && (
                <div className="md:col-span-2">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={userImage}
                      alt="Analysis photo"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                      <div className="flex items-center text-white">
                        <Camera className="h-4 w-4 mr-2" />
                        <span className="text-sm">Analysis photo</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Your Season</h3>
                <p className="text-2xl text-rose-500 font-semibold">{season}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Your Undertone</h3>
                <p className="text-2xl text-rose-500 font-semibold">{undertone}</p>
              </div>
            </div>

            {/* Characteristics */}
            {characteristics && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                  <Sparkles className="h-5 w-5 text-rose-500 mr-2" />
                  Your Natural Features
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Skin Tone</p>
                    <p className="text-sm text-gray-600">{characteristics.skinTone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Eye Color</p>
                    <p className="text-sm text-gray-600">{characteristics.eyeColor}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Hair Color</p>
                    <p className="text-sm text-gray-600">{characteristics.hairColor}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Contrast Level</p>
                    <p className="text-sm text-gray-600">{characteristics.contrastLevel}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Personal Description */}
            {personalizedDescription && (
              <div className="bg-rose-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  <Gem className="h-5 w-5 text-rose-500 mr-2" />
                  Your Unique Color Profile
                </h3>
                <p className="text-gray-700">{personalizedDescription}</p>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Color Palette */}
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Your Power Colors</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
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
              <p className="text-sm text-gray-600">{description}</p>
            </div>

            {/* Custom Recommendations */}
            {customRecommendations && (
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                    <ThumbsUp className="h-5 w-5 text-green-600 mr-2" />
                    Best Colors for You
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {customRecommendations.bestColors.map((color, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-700"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-rose-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                    <AlertTriangle className="h-5 w-5 text-rose-500 mr-2" />
                    Colors to Avoid
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {customRecommendations.worstColors.map((color, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-700"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-3">Personalized Tips</h3>
                  <ul className="space-y-2">
                    {customRecommendations.specificTips.map((tip, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2 mt-1.5"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex justify-between">
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