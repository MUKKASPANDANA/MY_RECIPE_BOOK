
import { Recipe } from '@/types/Recipe';

export const nonVegCurryRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Butter Chicken",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
    ingredients: ["500g chicken", "Tomatoes", "Cream", "Butter", "Garam masala", "Ginger-garlic paste", "Onions", "Cashews", "Fenugreek leaves"],
    steps: ["Marinate chicken", "Cook chicken until done", "Make tomato-onion gravy", "Add cream and butter", "Simmer with spices", "Garnish with fenugreek leaves"],
    category: "non-veg-curries",
    prepTime: "45 minutes",
    servings: "4"
  },
  {
    name: "Chicken Curry",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d117?w=800",
    ingredients: ["500g chicken", "Onions", "Tomatoes", "Coconut milk", "Curry leaves", "Spices", "Ginger-garlic paste", "Oil"],
    steps: ["Cook chicken with spices", "Make onion-tomato base", "Add coconut milk", "Simmer until thick", "Garnish with curry leaves"],
    category: "non-veg-curries",
    prepTime: "40 minutes",
    servings: "4"
  }
];
