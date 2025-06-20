
import { Recipe } from '@/types/Recipe';

export const gravyDishRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Dal Makhani",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
    ingredients: ["Black lentils", "Kidney beans", "Cream", "Butter", "Tomatoes", "Spices", "Ginger-garlic paste"],
    steps: ["Soak and cook lentils", "Make tomato gravy", "Add cream and butter", "Simmer for long time", "Serve with rice"],
    category: "gravy-dishes",
    prepTime: "2 hours",
    servings: "4"
  },
  {
    name: "Kadai Paneer",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["Paneer", "Bell peppers", "Onions", "Tomatoes", "Kadai masala", "Ginger-garlic paste", "Oil"],
    steps: ["Cut paneer and vegetables", "Make spiced gravy", "Add paneer and vegetables", "Cook until tender", "Garnish and serve"],
    category: "gravy-dishes",
    prepTime: "30 minutes",
    servings: "3"
  }
];
