import React from 'react';
import { Sparkles, ArrowRight, Palette } from 'lucide-react';

interface PreferencesFormProps {
  preferences: {
    occasion: string;
    style: string;
    season: string;
    useSeasonalColors: boolean;
  };
  onChange: (preferences: any) => void;
  onSubmit: () => void;
  userSeason?: string;
}

const PreferencesForm: React.FC<PreferencesFormProps> = ({
  preferences,
  onChange,
  onSubmit,
  userSeason
}) => {
  const occasions = [
    { id: 'formal', label: 'Formal', icon: '👔' },
    { id: 'casual', label: 'Casual', icon: '🌅' },
    { id: 'party', label: 'Party', icon: '🎉' }
  ];

  const styles = [
    { id: 'modern', label: 'Modern', icon: '🎯' },
    { id: 'creative', label: 'Creative', icon: '🎨' }
  ];

  const seasons = [
    { id: 'spring', label: 'Spring' },
    { id: 'summer', label: 'Summer' },
    { id: 'autumn', label: 'Autumn' },
    { id: 'winter', label: 'Winter' }
  ];

  const isComplete = preferences.occasion && preferences.style && preferences.season;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-8">
      {userSeason && (
        <div className="bg-rose-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-rose-700 mb-2">
            <Palette className="h-5 w-5" />
            <span className="font-medium">Your Color Analysis</span>
          </div>
          <p className="text-sm text-rose-600">
            Based on your color analysis, you are a {userSeason} type.
          </p>
        </div>
      )}

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">What's the occasion?</h3>
        <div className="grid grid-cols-3 gap-4">
          {occasions.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => onChange({ ...preferences, occasion: id })}
              className={`p-4 rounded-lg border-2 transition-colors ${
                preferences.occasion === id
                  ? 'border-rose-500 bg-rose-50'
                  : 'border-gray-200 hover:border-rose-200'
              }`}
            >
              <span className="text-2xl mb-2 block">{icon}</span>
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Preferred style</h3>
        <div className="grid grid-cols-2 gap-4">
          {styles.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => onChange({ ...preferences, style: id })}
              className={`p-4 rounded-lg border-2 transition-colors ${
                preferences.style === id
                  ? 'border-rose-500 bg-rose-50'
                  : 'border-gray-200 hover:border-rose-200'
              }`}
            >
              <span className="text-2xl mb-2 block">{icon}</span>
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Season Colors</h3>
        <div className="grid grid-cols-2 gap-4">
          {seasons.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => onChange({ ...preferences, season: id })}
              className={`p-4 rounded-lg border-2 transition-colors ${
                preferences.season === id
                  ? 'border-rose-500 bg-rose-50'
                  : 'border-gray-200 hover:border-rose-200'
              }`}
            >
              <span className="text-sm font-medium">{label}</span>
              {userSeason?.toLowerCase() === id && (
                <span className="text-xs text-rose-500 block mt-1">(Your Season)</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onSubmit}
        disabled={!isComplete}
        className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-colors ${
          isComplete
            ? 'bg-rose-500 hover:bg-rose-600 text-white'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        <Sparkles className="h-5 w-5" />
        <span>Generate Perfect Outfit</span>
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default PreferencesForm;