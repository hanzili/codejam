import React from 'react';
import { Share2, Palette, ExternalLink, Tag, Info } from 'lucide-react';

interface OutfitItem {
  type: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  color: string;
  description: string;
  link: string;
}

interface OutfitSetProps {
  title: string;
  occasion: string;
  items: OutfitItem[];
  totalPrice: number;
  season?: string;
  style?: string;
}

const OutfitSet: React.FC<OutfitSetProps> = ({ 
  title, 
  occasion, 
  items, 
  totalPrice,
  season,
  style 
}) => {
  const handleShare = async () => {
    const shareText = `Check out this ${season ? `${season} ` : ''}${style} outfit for ${occasion}!\n\nItems:\n${
      items.map(item => `- ${item.name} by ${item.brand} ($${item.price})`).join('\n')
    }\n\nTotal: $${totalPrice.toFixed(2)}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'SeasonOfYou Outfit',
          text: shareText,
          url: window.location.href
        });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Error sharing:', error);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert('Outfit details copied to clipboard!');
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="inline-block px-3 py-1 bg-rose-50 text-rose-500 rounded-full text-sm">
                {occasion}
              </span>
              {style && (
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-500 rounded-full text-sm">
                  {style}
                </span>
              )}
              {season && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-500 rounded-full text-sm">
                  <Palette className="h-4 w-4" />
                  {season} Colors
                </span>
              )}
            </div>
          </div>
          <span className="text-lg font-semibold text-rose-500">${totalPrice.toFixed(2)}</span>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="flex items-center space-x-4 p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        <Tag className="h-3 w-3 mr-1" />
                        {item.type}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 truncate">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.brand}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <Info className="h-4 w-4 mr-1" />
                        {item.color}
                      </span>
                      <span className="text-sm font-medium text-rose-500">${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-100 bg-gray-50 p-4">
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-rose-500 hover:text-rose-600"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Product
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleShare}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-rose-500 transition-colors"
            aria-label="Share outfit"
          >
            <Share2 className="h-5 w-5" />
            <span>Share Outfit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutfitSet;