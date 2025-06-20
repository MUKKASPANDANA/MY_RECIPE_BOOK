
import { Recipe } from '@/types/Recipe';

export const riceVarietyRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Coconut Rice",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["Basmati rice", "Coconut milk", "Curry leaves", "Mustard seeds", "Cashews", "Salt"],
    steps: ["Cook rice in coconut milk", "Temper with spices", "Add cashews", "Mix gently", "Serve warm"],
    category: "rice-varieties",
    prepTime: "25 minutes",
    servings: "4"
  },
  {
    name: "Lemon Rice",
    image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800",
    ingredients: ["Cooked rice", "Lemon juice", "Turmeric", "Curry leaves", "Peanuts", "Mustard seeds"],
    steps: ["Heat oil and add mustard seeds", "Add curry leaves and peanuts", "Mix with rice and turmeric", "Add lemon juice", "Serve fresh"],
    category: "rice-varieties",
    prepTime: "15 minutes",
    servings: "3"
  }
];
