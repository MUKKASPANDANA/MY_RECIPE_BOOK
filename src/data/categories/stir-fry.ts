
import { Recipe } from '@/types/Recipe';

export const stirFryRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Mixed Vegetable Stir Fry",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    ingredients: ["Mixed vegetables", "Soy sauce", "Garlic", "Ginger", "Oil", "Salt", "Pepper"],
    steps: ["Heat oil in wok", "Add garlic and ginger", "Stir-fry vegetables", "Add sauces", "Serve immediately"],
    category: "stir-fry",
    prepTime: "15 minutes",
    servings: "3"
  },
  {
    name: "Chicken Stir Fry",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d117?w=800",
    ingredients: ["Chicken strips", "Bell peppers", "Onions", "Soy sauce", "Oyster sauce", "Garlic", "Oil"],
    steps: ["Marinate chicken", "Heat oil in wok", "Stir-fry chicken", "Add vegetables", "Toss with sauces"],
    category: "stir-fry",
    prepTime: "20 minutes",
    servings: "3"
  }
];
