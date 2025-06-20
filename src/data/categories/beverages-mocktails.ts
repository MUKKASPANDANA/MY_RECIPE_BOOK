
import { Recipe } from '@/types/Recipe';

export const beverageMocktailRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Virgin Mojito",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    ingredients: ["Fresh mint leaves", "Lime juice", "Sugar", "Soda water", "Ice cubes"],
    steps: ["Muddle mint with sugar", "Add lime juice", "Fill glass with ice", "Top with soda water", "Garnish with mint"],
    category: "beverages-mocktails",
    prepTime: "5 minutes",
    servings: "1"
  },
  {
    name: "Fruit Punch",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800",
    ingredients: ["Mixed fruit juices", "Soda water", "Fresh fruits", "Ice", "Mint leaves"],
    steps: ["Mix fruit juices", "Add soda water", "Add fresh fruit pieces", "Serve over ice", "Garnish with mint"],
    category: "beverages-mocktails",
    prepTime: "10 minutes",
    servings: "4"
  }
];
