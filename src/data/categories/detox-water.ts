
import { Recipe } from '@/types/Recipe';

export const detoxWaterRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Lemon Mint Detox Water",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    ingredients: ["1 lemon sliced", "Fresh mint leaves", "1 liter water", "Ice cubes", "Honey (optional)"],
    steps: ["Wash lemon and mint thoroughly", "Slice lemon into rounds", "Add lemon slices to water", "Add fresh mint leaves", "Let infuse for 2-3 hours", "Serve chilled with ice"],
    category: "detox-water",
    prepTime: "5 minutes + 2 hours infusion",
    servings: "4"
  },
  {
    name: "Cucumber Lime Detox Water",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
    ingredients: ["1 cucumber sliced", "2 limes sliced", "1 liter water", "Ice cubes", "Fresh basil leaves"],
    steps: ["Wash cucumber and limes", "Slice cucumber and limes", "Add to water with basil", "Let infuse for 3-4 hours", "Strain if desired", "Serve over ice"],
    category: "detox-water",
    prepTime: "5 minutes + 3 hours infusion",
    servings: "4"
  },
  {
    name: "Ginger Lemon Detox Water",
    image: "https://images.unsplash.com/photo-1556881286-7c2c137feb93?w=800",
    ingredients: ["2 inch ginger piece", "1 lemon", "1 liter water", "Honey", "Ice cubes"],
    steps: ["Slice ginger thinly", "Slice lemon into rounds", "Add to water and let infuse", "Add honey to taste", "Serve chilled", "Can be consumed warm too"],
    category: "detox-water",
    prepTime: "5 minutes + 1 hour infusion",
    servings: "4"
  },
  {
    name: "Berry Mint Detox Water",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    ingredients: ["Mixed berries", "Fresh mint leaves", "1 liter water", "Ice cubes", "Lemon slices"],
    steps: ["Wash berries and mint", "Muddle berries slightly", "Add berries and mint to water", "Add lemon slices", "Infuse for 2-3 hours", "Serve with ice"],
    category: "detox-water",
    prepTime: "5 minutes + 2 hours infusion",
    servings: "4"
  },
  {
    name: "Apple Cinnamon Detox Water",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800",
    ingredients: ["2 apples sliced", "2 cinnamon sticks", "1 liter water", "Ice cubes", "Star anise (optional)"],
    steps: ["Slice apples thinly", "Add apples and cinnamon to water", "Let infuse for 4-6 hours", "Add star anise if desired", "Serve chilled", "Refill water 2-3 times"],
    category: "detox-water",
    prepTime: "5 minutes + 4 hours infusion",
    servings: "4"
  }
];
