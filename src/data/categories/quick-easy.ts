
import { Recipe } from '@/types/Recipe';

export const quickEasyRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Instant Noodles",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    ingredients: ["Instant noodles", "Vegetables", "Egg", "Spices", "Oil"],
    steps: ["Boil noodles", "Stir-fry vegetables", "Add cooked noodles", "Season and serve", "Ready in minutes"],
    category: "quick-easy",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Scrambled Eggs",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
    ingredients: ["Eggs", "Milk", "Salt", "Pepper", "Butter", "Herbs"],
    steps: ["Beat eggs with milk", "Heat butter in pan", "Scramble eggs gently", "Season with herbs", "Serve immediately"],
    category: "quick-easy",
    prepTime: "5 minutes",
    servings: "2"
  }
];
