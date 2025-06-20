
import { Recipe } from '@/types/Recipe';

export const sandwichWrapRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Grilled Cheese Sandwich",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Bread slices", "Cheese", "Butter", "Salt", "Pepper"],
    steps: ["Butter bread slices", "Place cheese between slices", "Grill until golden", "Flip and cook other side", "Serve hot"],
    category: "sandwiches-wraps",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Chicken Wrap",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d117?w=800",
    ingredients: ["Tortilla", "Grilled chicken", "Lettuce", "Tomatoes", "Mayo", "Cheese"],
    steps: ["Warm tortilla", "Spread mayo", "Add chicken and vegetables", "Roll tightly", "Cut in half and serve"],
    category: "sandwiches-wraps",
    prepTime: "15 minutes",
    servings: "2"
  }
];
