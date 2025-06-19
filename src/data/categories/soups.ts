
import { Recipe } from '@/types/Recipe';

export const soupRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Tomato Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
    ingredients: ["6 large tomatoes", "1 onion", "2 garlic cloves", "Fresh basil", "Vegetable broth", "Heavy cream", "Salt", "Black pepper", "Olive oil"],
    steps: ["Roast tomatoes and onions", "Sauté garlic in olive oil", "Blend roasted vegetables with broth", "Strain the mixture", "Add cream and seasonings", "Garnish with basil and serve hot"],
    category: "soups",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Chicken Corn Soup",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
    ingredients: ["200g chicken breast", "1 cup sweet corn", "3 cups chicken broth", "2 eggs", "2 tbsp cornstarch", "Soy sauce", "White pepper", "Spring onions", "Ginger"],
    steps: ["Boil and shred chicken", "Heat chicken broth", "Add corn and chicken", "Mix cornstarch with water", "Add to soup while stirring", "Beat eggs and add slowly", "Season and garnish"],
    category: "soups",
    prepTime: "25 minutes",
    servings: "4"
  },
  {
    name: "Vegetable Soup",
    image: "https://images.unsplash.com/photo-1588566565463-180a5b2090d2?w=800",
    ingredients: ["Mixed vegetables", "Vegetable broth", "Onion", "Garlic", "Herbs", "Olive oil", "Salt", "Black pepper", "Bay leaves"],
    steps: ["Chop all vegetables", "Sauté onions and garlic", "Add vegetables and broth", "Simmer with herbs", "Season to taste", "Serve hot with bread"],
    category: "soups",
    prepTime: "35 minutes",
    servings: "4"
  },
  {
    name: "Mushroom Soup",
    image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800",
    ingredients: ["500g mushrooms", "2 onions", "3 garlic cloves", "Vegetable broth", "Heavy cream", "Thyme", "Bay leaves", "Butter", "Salt", "White pepper"],
    steps: ["Slice mushrooms and onions", "Sauté in butter until golden", "Add garlic and herbs", "Pour in broth and simmer", "Blend partially for texture", "Add cream and season"],
    category: "soups",
    prepTime: "40 minutes",
    servings: "4"
  },
  {
    name: "Hot and Sour Soup",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
    ingredients: ["200g tofu", "Mushrooms", "Bamboo shoots", "Chicken broth", "Soy sauce", "Vinegar", "Chili sauce", "Cornstarch", "Egg", "Spring onions"],
    steps: ["Slice tofu and vegetables", "Heat chicken broth", "Add vegetables and tofu", "Mix sauces and add to soup", "Thicken with cornstarch", "Add beaten egg slowly", "Garnish and serve"],
    category: "soups",
    prepTime: "20 minutes",
    servings: "3-4"
  }
];
