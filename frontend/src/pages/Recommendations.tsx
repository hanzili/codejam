import React, { useState } from 'react';
import { Sparkles, Palette, ArrowRight, User } from 'lucide-react';
import OutfitSet from '../components/OutfitSet';
import PersonalProfile, { PersonalProfileData } from '../components/PersonalProfile';

type Step = 'profile' | 'preferences' | 'results';

const Recommendations = () => {
  const [step, setStep] = useState<Step>(() => {
    // Check if profile exists in localStorage
    const profile = localStorage.getItem('personalProfile');
    return profile ? 'preferences' : 'profile';
  });
  
  const [preferences, setPreferences] = useState({
    useSeasonalColors: true,
    occasion: '',
    style: '',
    priceRange: '',
    includeAccessories: true
  });
  const [showOutfits, setShowOutfits] = useState(false);

  const occasions = [
    { id: 'formal', label: 'Formal', icon: '👔' },
    { id: 'business', label: 'Business', icon: '💼' },
    { id: 'casual', label: 'Casual', icon: '🌅' },
    { id: 'special', label: 'Special Event', icon: '✨' },
    { id: 'active', label: 'Active', icon: '🏃‍♂️' }
  ];

  const styles = [
    { id: 'classic', label: 'Classic', icon: '✨' },
    { id: 'modern', label: 'Modern', icon: '🎯' },
    { id: 'casual', label: 'Casual', icon: '🌅' },
    { id: 'creative', label: 'Creative', icon: '🎨' },
    { id: 'minimal', label: 'Minimal', icon: '⚪' }
  ];

  const priceRanges = [
    { id: 'budget', label: 'Budget Friendly ($)', range: '100-300' },
    { id: 'moderate', label: 'Moderate ($$)', range: '300-700' },
    { id: 'premium', label: 'Premium ($$$)', range: '700-1500' },
    { id: 'luxury', label: 'Luxury ($$$$)', range: '1500+' }
  ];

  const handleProfileComplete = (profileData: PersonalProfileData) => {
    localStorage.setItem('personalProfile', JSON.stringify(profileData));
    setStep('preferences');
  };

  const handleSubmit = () => {
    setStep('results');
    // Simulate loading
    setTimeout(() => setShowOutfits(true), 1000);
  };

  const mockOutfit = {
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
  };

  if (step === 'profile') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Set Up Your Profile</h1>
          <p className="text-gray-600">Help us understand your style and fit preferences</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <PersonalProfile onComplete={handleProfileComplete} />
        </div>
      </div>
    );
  }

  if (step === 'preferences') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Create Your Perfect Outfit</h1>
          <p className="text-gray-600">Tell us what you're looking for, and we'll curate the perfect ensemble</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-lg font-medium text-gray-900">Use Seasonal Color Analysis</label>
              <button
                onClick={() => setPreferences(p => ({ ...p, useSeasonalColors: !p.useSeasonalColors }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  preferences.useSeasonalColors ? 'bg-rose-500' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.useSeasonalColors ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            {preferences.useSeasonalColors && (
              <div className="flex items-center text-sm text-gray-600 bg-rose-50 p-3 rounded-lg">
                <Palette className="h-5 w-5 text-rose-500 mr-2" />
                Your seasonal colors will be considered in the recommendations
              </div>
            )}
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">What's the occasion?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {occasions.map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={() => setPreferences(p => ({ ...p, occasion: id }))}
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {styles.map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={() => setPreferences(p => ({ ...p, style: id }))}
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
            <div className="grid grid-cols-2 gap-4">
              {priceRanges.map(({ id, label, range }) => (
                <button
                  key={id}
                  onClick={() => setPreferences(p => ({ ...p, priceRange: id }))}
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
            onClick={handleSubmit}
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
          >
            <Sparkles className="h-5 w-5" />
            <span>Generate Perfect Outfit</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Perfect Outfit</h1>
        <p className="text-gray-600">Curated based on your preferences and style</p>
      </div>

      {!showOutfits ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500" />
        </div>
      ) : (
        <div className="space-y-8">
          <OutfitSet {...mockOutfit} />
          <div className="flex justify-between">
            <button
              onClick={() => setStep('preferences')}
              className="px-6 py-2 border-2 border-rose-500 text-rose-500 rounded-lg hover:bg-rose-50"
            >
              Adjust Preferences
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
            >
              Generate Another Outfit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommendations;