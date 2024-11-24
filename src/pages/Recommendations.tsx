import React from 'react';
import OutfitGenerator from '../components/OutfitGenerator';

const Recommendations = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Create Your Perfect Outfit</h1>
        <p className="text-gray-600">Tell us what you're looking for, and we'll curate the perfect ensemble</p>
      </div>

      <OutfitGenerator />
    </div>
  );
};

export default Recommendations;