
import { Recipe } from '@/types/Recipe';

export const onePotMealRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Khichdi",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["Rice", "Lentils", "Vegetables", "Turmeric", "Ghee", "Cumin seeds", "Salt"],
    steps: ["Wash rice and lentils", "Cook with vegetables", "Add spices", "Simmer until mushy", "Serve with pickle"],
    category: "one-pot-meals",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Pulao",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d117?w=800",
    ingredients: ["Basmati rice", "Mixed vegetables", "Whole spices", "Ghee", "Onions", "Salt"],
    steps: ["Soak rice", "Sauté vegetables and spices", "Add rice and water", "Cook until done", "Let it rest before serving"],
    category: "one-pot-meals",
    prepTime: "35 minutes",
    servings: "4"
  }
];
