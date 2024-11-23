import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface PreferencesFormProps {
  preferences: {
    occasion: string;
    style: string;
    priceRange: string;
    useSeasonalColors: boolean;
  };
  onChange: (preferences: any) => void;
  onSubmit: () => void;
}

const PreferencesForm: React.FC<PreferencesFormProps> = ({
  preferences,
  onChange,
  onSubmit
}) => {
  const occasions = [
    { id: 'formal', label: 'Formal', icon: '👔' },
    { id: 'casual', label: 'Casual', icon: '🌅' },
    { id: 'business', label: 'Business', icon: '💼' },
    { id: 'party', label: 'Party', icon: '🎉' }
  ];

  const styles = [
    { id: 'classic', label: 'Classic', icon: '✨' },
    { id: 'modern', label: 'Modern', icon: '🎯' },
    { id: 'creative', label: 'Creative', icon: '🎨' }
  ];

  const priceRanges = [
    { id: 'budget', label: 'Budget ($)', range: '100-300' },
    { id: 'moderate', label: 'Moderate ($$)', range: '300-700' },
    { id: 'premium', label: 'Premium ($$$)', range: '700+' }
  ];

  const isComplete = preferences.occasion && preferences.style && preferences.priceRange;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">What's the occasion?</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
        <div className="grid grid-cols-3 gap-4">
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
        <h3 className="text-lg font-medium text-gray-900 mb-4">Price range</h3>
        <div className="grid grid-cols-3 gap-4">
          {priceRanges.map(({ id, label, range }) => (
            <button
              key={id}
              onClick={() => onChange({ ...preferences, priceRange: id })}
              className={`p-4 rounded-lg border-2 transition-colors ${
                preferences.priceRange === id
                  ? 'border-rose-500 bg-rose-50'
                  : 'border-gray-200 hover:border-rose-200'
              }`}
            >
              <span className="font-medium">{label}</span>
              <span className="text-sm text-gray-500 block">${range}</span>
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