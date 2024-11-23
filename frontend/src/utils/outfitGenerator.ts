import { outfitItems, outfitRules, priceRanges } from '../config/outfitData';

interface OutfitPreferences {
  occasion: string;
  style: string;
  priceRange: string;
  season?: string;
}

export function generateOutfit(preferences: OutfitPreferences) {
  const { occasion, style, priceRange, season } = preferences;
  
  // Try to get items for the specific combination
  let availableItems = outfitItems[occasion]?.[style]?.[priceRange]?.[season?.toLowerCase() || 'spring'];
  
  // If no items found with season, try without season
  if (!availableItems || availableItems.length === 0) {
    availableItems = outfitItems[occasion]?.[style]?.[priceRange]?.spring;
  }
  
  // If still no items, try with different style but same occasion
  if (!availableItems || availableItems.length === 0) {
    const styles = Object.keys(outfitItems[occasion] || {});
    for (const altStyle of styles) {
      availableItems = outfitItems[occasion]?.[altStyle]?.[priceRange]?.spring;
      if (availableItems && availableItems.length > 0) break;
    }
  }
  
  // If still no items, try with different price range
  if (!availableItems || availableItems.length === 0) {
    const priceRanges = ['budget', 'moderate', 'premium'];
    for (const altPrice of priceRanges) {
      if (altPrice === priceRange) continue;
      availableItems = outfitItems[occasion]?.[style]?.[altPrice]?.spring;
      if (availableItems && availableItems.length > 0) break;
    }
  }
  
  if (!availableItems || availableItems.length === 0) {
    console.log('No items found for:', { occasion, style, priceRange, season });
    return null;
  }
  
  // Get style rules for the season
  const rules = season ? outfitRules[season.toLowerCase()] : outfitRules.spring;
  
  // Calculate total budget
  const budget = priceRanges[priceRange];
  
  // Generate outfit within budget and following rules
  const selectedItems = selectItemsWithinBudget(availableItems, budget);
  
  if (selectedItems.length === 0) {
    console.log('No items within budget for:', { occasion, style, priceRange, budget });
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

function selectItemsWithinBudget(items: any[], budget: { min: number; max: number }) {
  let remainingBudget = budget.max;
  const selectedItems = [];
  
  // Essential items first (in order of importance)
  const essentialTypes = ['Suit', 'Blazer', 'Jacket', 'Shirt', 'T-Shirt', 'Pants'];
  
  // Select one item from each essential type
  for (const type of essentialTypes) {
    const availableItems = items.filter(i => i.type === type && i.price <= remainingBudget);
    if (availableItems.length > 0) {
      // Select random item from available ones
      const selectedItem = availableItems[Math.floor(Math.random() * availableItems.length)];
      selectedItems.push(selectedItem);
      remainingBudget -= selectedItem.price;
    }
  }
  
  // Add accessories if budget allows
  const accessories = items.filter(i => 
    !essentialTypes.includes(i.type) && 
    i.price <= remainingBudget &&
    !selectedItems.find(selected => selected.type === i.type)
  );
  
  // Randomly select accessories within budget
  while (accessories.length > 0 && remainingBudget > 0) {
    const randomIndex = Math.floor(Math.random() * accessories.length);
    const accessory = accessories[randomIndex];
    
    if (accessory.price <= remainingBudget) {
      selectedItems.push(accessory);
      remainingBudget -= accessory.price;
    }
    
    accessories.splice(randomIndex, 1);
  }
  
  // Return items if we have at least 2 pieces
  return selectedItems.length >= 2 ? selectedItems : [];
}