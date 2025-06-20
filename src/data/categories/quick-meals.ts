
import { Recipe } from '@/types/Recipe';

export const quickMealRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Instant Noodles",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    ingredients: ["Instant noodles", "Vegetables", "Egg", "Spices", "Oil"],
    steps: ["Boil noodles", "Stir-fry vegetables", "Add cooked noodles", "Season and serve", "Ready in minutes"],
    category: "quick-meals",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Scrambled Eggs",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
    ingredients: ["Eggs", "Milk", "Salt", "Pepper", "Butter", "Herbs"],
    steps: ["Beat eggs with milk", "Heat butter in pan", "Scramble eggs gently", "Season with herbs", "Serve immediately"],
    category: "quick-meals",
    prepTime: "5 minutes",
    servings: "2"
  },
  {
    name: "Grilled Sandwich",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Bread", "Cheese", "Vegetables", "Butter", "Salt", "Pepper"],
    steps: ["Layer ingredients on bread", "Butter outside", "Grill until golden", "Cut diagonally", "Serve hot"],
    category: "quick-meals",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Fruit Smoothie",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800",
    ingredients: ["Mixed fruits", "Yogurt", "Honey", "Ice", "Milk"],
    steps: ["Chop fruits", "Blend with yogurt", "Add honey and ice", "Blend until smooth", "Serve chilled"],
    category: "quick-meals",
    prepTime: "5 minutes",
    servings: "2"
  },
  {
    name: "Avocado Toast",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800",
    ingredients: ["Bread", "Avocado", "Lemon juice", "Salt", "Pepper", "Tomatoes"],
    steps: ["Toast bread", "Mash avocado", "Spread on toast", "Season well", "Top with tomatoes"],
    category: "quick-meals",
    prepTime: "8 minutes",
    servings: "2"
  }
];
