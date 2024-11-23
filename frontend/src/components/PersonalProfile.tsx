import React from 'react';
import { Save, ArrowRight } from 'lucide-react';

interface PersonalProfileProps {
  onComplete: (data: PersonalProfileData) => void;
  initialData?: PersonalProfileData;
}

export interface PersonalProfileData {
  clothingPreference?: string;
  height?: string;
  shoeSize?: string;
  measurements?: {
    chest?: string;
    waist?: string;
    hips?: string;
    inseam?: string;
  };
  fitPreference?: string[];
  bodyShape?: string;
}

const PersonalProfile: React.FC<PersonalProfileProps> = ({ onComplete, initialData }) => {
  const [profile, setProfile] = React.useState<PersonalProfileData>(initialData || {
    clothingPreference: '',
    height: '',
    shoeSize: '',
    measurements: {
      chest: '',
      waist: '',
      hips: '',
      inseam: '',
    },
    fitPreference: [],
    bodyShape: '',
  });

  const clothingPreferences = [
    { value: 'feminine', label: 'Feminine Style' },
    { value: 'masculine', label: 'Masculine Style' },
    { value: 'androgynous', label: 'Gender-Neutral Style' },
    { value: 'mixed', label: 'Mixed Style' }
  ];

  const fitPreferences = [
    'Relaxed Fit',
    'Slim Fit',
    'Regular Fit',
    'Oversized',
    'Form-Fitting',
    'Loose & Flowy'
  ];

  const bodyShapes = [
    'Rectangle',
    'Triangle',
    'Inverted Triangle',
    'Hourglass',
    'Oval',
    'Athletic'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Clean up empty values before saving
    const cleanProfile = Object.entries(profile).reduce((acc, [key, value]) => {
      if (key === 'measurements') {
        const cleanMeasurements = Object.entries(value as object).reduce((mAcc, [mKey, mValue]) => {
          if (mValue) mAcc[mKey] = mValue;
          return mAcc;
        }, {});
        if (Object.keys(cleanMeasurements).length > 0) acc[key] = cleanMeasurements;
      } else if (value && (typeof value !== 'string' || value.trim() !== '')) {
        acc[key] = value;
      }
      return acc;
    }, {} as PersonalProfileData);

    onComplete(cleanProfile);
  };

  const handleFitPreferenceToggle = (pref: string) => {
    setProfile(prev => ({
      ...prev,
      fitPreference: prev.fitPreference?.includes(pref)
        ? prev.fitPreference.filter(p => p !== pref)
        : [...(prev.fitPreference || []), pref]
    }));
  };

  const handleSkip = () => {
    onComplete({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Style Profile</h3>
        <p className="text-sm text-gray-600 mb-6">
          Help us personalize your recommendations. All fields are optional - fill in only what you're comfortable sharing.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Clothing Style Preference <span className="text-gray-400">(optional)</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {clothingPreferences.map(({ value, label }) => (
              <button
                type="button"
                key={value}
                onClick={() => setProfile(prev => ({ 
                  ...prev, 
                  clothingPreference: prev.clothingPreference === value ? '' : value 
                }))}
                className={`p-3 text-sm rounded-lg border-2 transition-colors ${
                  profile.clothingPreference === value
                    ? 'border-rose-500 bg-rose-50 text-rose-700'
                    : 'border-gray-200 hover:border-rose-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Height <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g., 175 cm"
              value={profile.height}
              onChange={e => setProfile(prev => ({ ...prev, height: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Shoe Size (EU) <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g., 42"
              value={profile.shoeSize}
              onChange={e => setProfile(prev => ({ ...prev, shoeSize: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Body Measurements <span className="text-gray-400">(optional)</span>
          </label>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Chest (cm)"
              value={profile.measurements?.chest}
              onChange={e => setProfile(prev => ({
                ...prev,
                measurements: { ...prev.measurements, chest: e.target.value }
              }))}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
            />
            <input
              type="text"
              placeholder="Waist (cm)"
              value={profile.measurements?.waist}
              onChange={e => setProfile(prev => ({
                ...prev,
                measurements: { ...prev.measurements, waist: e.target.value }
              }))}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
            />
            <input
              type="text"
              placeholder="Hips (cm)"
              value={profile.measurements?.hips}
              onChange={e => setProfile(prev => ({
                ...prev,
                measurements: { ...prev.measurements, hips: e.target.value }
              }))}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
            />
            <input
              type="text"
              placeholder="Inseam (cm)"
              value={profile.measurements?.inseam}
              onChange={e => setProfile(prev => ({
                ...prev,
                measurements: { ...prev.measurements, inseam: e.target.value }
              }))}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fit Preference <span className="text-gray-400">(optional)</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {fitPreferences.map(pref => (
              <button
                type="button"
                key={pref}
                onClick={() => handleFitPreferenceToggle(pref)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  profile.fitPreference?.includes(pref)
                    ? 'bg-rose-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {pref}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Body Shape <span className="text-gray-400">(optional)</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {bodyShapes.map(shape => (
              <button
                type="button"
                key={shape}
                onClick={() => setProfile(prev => ({ 
                  ...prev, 
                  bodyShape: prev.bodyShape === shape ? '' : shape 
                }))}
                className={`p-3 text-sm rounded-lg border-2 transition-colors ${
                  profile.bodyShape === shape
                    ? 'border-rose-500 bg-rose-50 text-rose-700'
                    : 'border-gray-200 hover:border-rose-200'
                }`}
              >
                {shape}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={handleSkip}
          className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 border-2 border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <span>Skip for Now</span>
          <ArrowRight className="h-5 w-5" />
        </button>
        <button
          type="submit"
          className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-500 hover:bg-rose-600"
        >
          <Save className="h-5 w-5" />
          <span>Save Profile</span>
        </button>
      </div>
    </form>
  );
};

export default PersonalProfile;