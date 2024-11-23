import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, ShoppingBag, User, Settings } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, User!</h1>
        <p className="text-gray-600">Manage your style profile and get personalized recommendations</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          to="/color-analysis"
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
            <Palette className="h-6 w-6 text-rose-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Color Analysis</h3>
          <p className="text-gray-600">Update your seasonal color analysis</p>
        </Link>

        <Link
          to="/recommendations"
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
            <ShoppingBag className="h-6 w-6 text-rose-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Style Recommendations</h3>
          <p className="text-gray-600">View your personalized outfit suggestions</p>
        </Link>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
            <User className="h-6 w-6 text-rose-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Profile</h3>
          <p className="text-gray-600">Update your measurements and preferences</p>
          <button className="mt-4 inline-flex items-center text-sm text-rose-500 hover:text-rose-600">
            <Settings className="h-4 w-4 mr-1" />
            Edit Profile
          </button>
        </div>
      </div>

      <div className="mt-12 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center text-gray-600">
            <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
            <span>Color analysis completed on March 15, 2024</span>
          </div>
          <div className="flex items-center text-gray-600">
            <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
            <span>Updated style preferences</span>
          </div>
          <div className="flex items-center text-gray-600">
            <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
            <span>Received new outfit recommendations</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;