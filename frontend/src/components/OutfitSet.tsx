import React from 'react';
import { ShoppingBag, Heart, Share2 } from 'lucide-react';

interface OutfitItem {
  type: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  color: string;
}

interface OutfitSetProps {
  title: string;
  occasion: string;
  items: OutfitItem[];
  totalPrice: number;
}

const OutfitSet: React.FC<OutfitSetProps> = ({ title, occasion, items, totalPrice }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <span className="inline-block mt-1 px-3 py-1 bg-rose-50 text-rose-500 rounded-full text-sm">
              {occasion}
            </span>
          </div>
          <span className="text-lg font-semibold text-rose-500">${totalPrice}</span>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1">
                <p className="font-medium text-gray-900">{item.type}</p>
                <p className="text-sm text-gray-600">{item.brand}</p>
                <p className="text-sm text-gray-500">{item.color}</p>
              </div>
              <span className="font-medium text-gray-900">${item.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="flex space-x-2">
            <button className="p-2 text-gray-600 hover:text-rose-500">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-rose-500">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600">
            <ShoppingBag className="h-5 w-5" />
            <span>Shop All Items</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutfitSet;