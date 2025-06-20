
import { Recipe } from '@/types/Recipe';

export const northIndianRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Chole Bhature",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Chickpeas", "All purpose flour", "Yogurt", "Spices", "Onions", "Tomatoes", "Oil for frying"],
    steps: ["Cook spiced chickpeas", "Make dough for bhature", "Roll and deep fry bhature", "Serve hot together"],
    category: "north-indian",
    prepTime: "1 hour",
    servings: "4"
  },
  {
    name: "Rajma",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
    ingredients: ["Kidney beans", "Onions", "Tomatoes", "Ginger-garlic paste", "Spices", "Cream"],
    steps: ["Soak and cook kidney beans", "Make onion-tomato gravy", "Add beans and spices", "Simmer until thick", "Serve with rice"],
    category: "north-indian",
    prepTime: "1.5 hours",
    servings: "4"
  }
];
