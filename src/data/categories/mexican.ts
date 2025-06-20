
import { Recipe } from '@/types/Recipe';

export const mexicanRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Tacos",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Tortillas", "Ground meat", "Lettuce", "Tomatoes", "Cheese", "Sour cream", "Salsa", "Spices"],
    steps: ["Cook seasoned meat", "Warm tortillas", "Fill with meat and toppings", "Serve with salsa", "Enjoy immediately"],
    category: "mexican",
    prepTime: "20 minutes",
    servings: "4"
  },
  {
    name: "Quesadillas",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Flour tortillas", "Cheese", "Chicken or vegetables", "Bell peppers", "Onions", "Spices"],
    steps: ["Fill tortilla with cheese and filling", "Cook on both sides until golden", "Cut into wedges", "Serve with salsa"],
    category: "mexican",
    prepTime: "15 minutes",
    servings: "2"
  }
];
