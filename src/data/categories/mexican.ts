
import { Recipe } from '@/types/Recipe';

export const mexicanRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Chicken Tacos",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Tortillas", "Chicken breast", "Lettuce", "Tomatoes", "Cheese", "Salsa"],
    steps: ["Season and cook chicken", "Warm tortillas", "Fill with chicken and toppings", "Serve with salsa", "Enjoy fresh"],
    category: "mexican",
    prepTime: "25 minutes",
    servings: "4"
  },
  {
    name: "Guacamole",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800",
    ingredients: ["Avocados", "Lime juice", "Onions", "Tomatoes", "Cilantro", "Jalapeños"],
    steps: ["Mash avocados", "Add lime juice", "Mix in vegetables", "Season with salt", "Serve with chips"],
    category: "mexican",
    prepTime: "15 minutes",
    servings: "4"
  },
  {
    name: "Quesadillas",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Flour tortillas", "Cheese", "Chicken", "Bell peppers", "Onions", "Spices"],
    steps: ["Fill tortilla with ingredients", "Fold in half", "Cook until golden", "Cut into wedges", "Serve with salsa"],
    category: "mexican",
    prepTime: "20 minutes",
    servings: "2"
  },
  {
    name: "Enchiladas",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Corn tortillas", "Chicken", "Enchilada sauce", "Cheese", "Onions", "Sour cream"],
    steps: ["Fill tortillas with chicken", "Roll and place in dish", "Cover with sauce", "Top with cheese", "Bake until melted"],
    category: "mexican",
    prepTime: "40 minutes",
    servings: "4"
  },
  {
    name: "Nachos",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Tortilla chips", "Cheese sauce", "Jalapeños", "Tomatoes", "Sour cream", "Guacamole"],
    steps: ["Arrange chips on plate", "Pour hot cheese sauce", "Add toppings", "Serve immediately", "Enjoy while hot"],
    category: "mexican",
    prepTime: "15 minutes",
    servings: "4"
  }
];
