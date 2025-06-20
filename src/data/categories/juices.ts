
import { Recipe } from '@/types/Recipe';

export const juiceRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Orange Juice",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    ingredients: ["4 fresh oranges", "Sugar (optional)", "Ice cubes", "Mint leaves"],
    steps: ["Extract juice from oranges", "Strain if desired", "Add sugar to taste", "Serve over ice", "Garnish with mint"],
    category: "juices",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Carrot Juice",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
    ingredients: ["4 large carrots", "Ginger", "Lemon juice", "Honey", "Water"],
    steps: ["Peel and chop carrots", "Blend with water and ginger", "Strain the juice", "Add lemon and honey", "Serve fresh"],
    category: "juices",
    prepTime: "15 minutes",
    servings: "2"
  }
];
