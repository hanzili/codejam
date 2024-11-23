import React from 'react';
import { SignedIn, SignedOut, SignUpButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { Palette, ShoppingBag, Sparkles, Target } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          Never Struggle with
          <span className="text-rose-500"> Choosing Clothes</span> Again
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Get personalized outfit recommendations that match your style, body type, and seasonal colors. Perfect for any occasion and budget.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-6 w-6 text-rose-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized For You</h3>
            <p className="text-gray-600">Get outfit recommendations tailored to your body type, style preferences, and budget.</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="h-6 w-6 text-rose-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Color Analysis</h3>
            <p className="text-gray-600">Discover your seasonal colors and learn which shades complement you best.</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="h-6 w-6 text-rose-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Complete Outfits</h3>
            <p className="text-gray-600">Get full outfit recommendations including accessories, all within your budget.</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h4 className="text-lg font-semibold mb-2">Create Profile</h4>
              <p className="text-gray-600">Tell us about your style preferences and measurements</p>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h4 className="text-lg font-semibold mb-2">Color Analysis</h4>
              <p className="text-gray-600">Upload a selfie to discover your seasonal colors</p>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h4 className="text-lg font-semibold mb-2">Set Preferences</h4>
              <p className="text-gray-600">Choose occasion, style, and budget range</p>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h4 className="text-lg font-semibold mb-2">Get Recommendations</h4>
              <p className="text-gray-600">Receive perfectly curated outfit sets</p>
            </div>
          </div>
        </div>
        
        <div className="bg-rose-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">Perfect For You If...</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <Sparkles className="h-6 w-6 text-rose-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">You struggle with putting together complete outfits</p>
            </div>
            <div className="flex items-start space-x-3">
              <Sparkles className="h-6 w-6 text-rose-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">You want to dress well within your budget</p>
            </div>
            <div className="flex items-start space-x-3">
              <Sparkles className="h-6 w-6 text-rose-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">You're unsure which colors suit you best</p>
            </div>
            <div className="flex items-start space-x-3">
              <Sparkles className="h-6 w-6 text-rose-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">You want outfits that match your body type</p>
            </div>
            <div className="flex items-start space-x-3">
              <Sparkles className="h-6 w-6 text-rose-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">You need help dressing for specific occasions</p>
            </div>
            <div className="flex items-start space-x-3">
              <Sparkles className="h-6 w-6 text-rose-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">You want to develop a more cohesive style</p>
            </div>
          </div>
        </div>
        
        <SignedOut>
          <SignUpButton mode="modal">
            <button className="inline-block bg-rose-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-rose-600 transition-colors">
              Start Your Style Journey
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <Link
            to="/dashboard"
            className="inline-block bg-rose-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-rose-600 transition-colors"
          >
            Go to Dashboard
          </Link>
        </SignedIn>
      </div>
      
      <div className="mt-24 grid md:grid-cols-2 gap-8">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070"
          alt="Fashion Preview"
          className="w-full h-96 object-cover rounded-2xl"
        />
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070"
          alt="Style Consultation"
          className="w-full h-96 object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}

export default Home;