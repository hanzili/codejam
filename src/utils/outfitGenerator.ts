import { outfitItems, outfitRules } from '../config/outfitData';

interface OutfitPreferences {
  occasion: string;
  style: string;
  season?: string;
}

export function generateOutfit(preferences: OutfitPreferences) {
  const { occasion, style, season } = preferences;
  
  // Try to get items for the specific combination
  let availableItems = outfitItems[occasion]?.[style]?.[season?.toLowerCase() || 'spring'];
  
  // If no items found with season, try without season
  if (!availableItems) {
    availableItems = outfitItems[occasion]?.[style]?.spring;
  }
  
  // If still no items, try with different style but same occasion
  if (!availableItems) {
    const styles = Object.keys(outfitItems[occasion] || {});
    for (const altStyle of styles) {
      availableItems = outfitItems[occasion]?.[altStyle]?.spring;
      if (availableItems) break;
    }
  }
  
  if (!availableItems) {
    console.log('No items found for:', { occasion, style, season });
    return null;
  }
  
  // Get style rules for the season
  const rules = season ? outfitRules[season.toLowerCase()] : outfitRules.spring;
  
  // Select items following rules
  const selectedItems = selectItems(availableItems.top, availableItems.bottom, rules);
  
  if (selectedItems.length === 0) {
    console.log('No suitable items found for:', { occasion, style });
    return null;
  }
  
  return {
    id: Date.now(),
    title: generateOutfitTitle(occasion, style, season),
    occasion,
    style,
    seasonalColors: !!season,
    season,
    totalPrice: selectedItems.reduce((sum, item) => sum + item.price, 0),
    items: selectedItems
  };
}

function generateOutfitTitle(occasion: string, style: string, season?: string) {
  const styleText = style.charAt(0).toUpperCase() + style.slice(1);
  const occasionText = occasion.charAt(0).toUpperCase() + occasion.slice(1);
  const seasonText = season ? ` ${season.charAt(0).toUpperCase() + season.slice(1)}` : '';
  
  return `${styleText}${seasonText} ${occasionText} Ensemble`;
}

function selectItems(topItems: any[], bottomItems: any[], rules: any) {
  const selectedItems = [];
  
  // Select one top item
  if (topItems && topItems.length > 0) {
    const randomTop = topItems[Math.floor(Math.random() * topItems.length)];
    selectedItems.push(randomTop);
  }
  
  // Select one bottom item
  if (bottomItems && bottomItems.length > 0) {
    const randomBottom = bottomItems[Math.floor(Math.random() * bottomItems.length)];
    selectedItems.push(randomBottom);
  }
  
  return selectedItems;
}