
import { Recipe } from '@/types/Recipe';

export const soupRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Tomato Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
    ingredients: ["Tomatoes", "Onions", "Garlic", "Basil", "Cream", "Vegetable broth"],
    steps: ["Roast tomatoes", "Sauté onions and garlic", "Blend with broth", "Strain mixture", "Add cream and serve"],
    category: "soups",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Chicken Corn Soup",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d117?w=800",
    ingredients: ["Chicken breast", "Sweet corn", "Eggs", "Chicken broth", "Cornstarch", "Spring onions"],
    steps: ["Boil and shred chicken", "Heat broth with corn", "Thicken with cornstarch", "Add beaten eggs", "Garnish with spring onions"],
    category: "soups",
    prepTime: "25 minutes",
    servings: "4"
  },
  {
    name: "Vegetable Soup",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    ingredients: ["Mixed vegetables", "Vegetable broth", "Onions", "Garlic", "Herbs", "Olive oil"],
    steps: ["Chop vegetables", "Sauté onions", "Add vegetables and broth", "Simmer with herbs", "Season and serve"],
    category: "soups",
    prepTime: "35 minutes",
    servings: "4"
  },
  {
    name: "Mushroom Soup",
    image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800",
    ingredients: ["Mushrooms", "Onions", "Garlic", "Cream", "Vegetable broth", "Thyme"],
    steps: ["Sauté mushrooms", "Cook onions and garlic", "Add broth and herbs", "Blend partially", "Add cream and serve"],
    category: "soups",
    prepTime: "40 minutes",
    servings: "4"
  },
  {
    name: "Lentil Soup",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
    ingredients: ["Red lentils", "Onions", "Carrots", "Celery", "Vegetable broth", "Spices"],
    steps: ["Sauté vegetables", "Add lentils and broth", "Simmer until tender", "Season with spices", "Serve hot"],
    category: "soups",
    prepTime: "35 minutes",
    servings: "4"
  }
];
