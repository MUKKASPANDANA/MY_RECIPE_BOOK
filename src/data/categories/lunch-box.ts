
import { Recipe } from '@/types/Recipe';

export const lunchBoxRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Vegetable Sandwich",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Bread", "Cucumber", "Tomatoes", "Lettuce", "Cheese", "Mayo", "Salt", "Pepper"],
    steps: ["Layer vegetables on bread", "Add cheese and seasoning", "Spread mayo", "Cut and pack", "Great for lunch boxes"],
    category: "lunch-box",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Rice Balls",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["Cooked rice", "Vegetables", "Soy sauce", "Sesame oil", "Nori sheets"],
    steps: ["Season rice", "Mix with vegetables", "Form into balls", "Wrap with nori", "Pack for lunch"],
    category: "lunch-box",
    prepTime: "15 minutes",
    servings: "3"
  }
];
