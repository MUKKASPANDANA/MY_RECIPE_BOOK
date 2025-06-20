
import { Recipe } from '@/types/Recipe';

export const beverageRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Mango Lassi",
    image: "https://images.unsplash.com/photo-1548373902-d5b6ad046224?w=800",
    ingredients: ["Ripe mangoes", "Yogurt", "Sugar", "Cardamom", "Ice cubes"],
    steps: ["Blend mangoes until smooth", "Add yogurt and sugar", "Blend with ice", "Add cardamom", "Serve chilled"],
    category: "beverages",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Masala Chai",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
    ingredients: ["Tea leaves", "Milk", "Sugar", "Ginger", "Cardamom", "Cinnamon"],
    steps: ["Boil water with spices", "Add tea leaves", "Add milk and sugar", "Simmer and strain", "Serve hot"],
    category: "beverages",
    prepTime: "15 minutes",
    servings: "4"
  },
  {
    name: "Fresh Lime Soda",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    ingredients: ["Fresh limes", "Soda water", "Sugar", "Salt", "Ice", "Mint"],
    steps: ["Extract lime juice", "Mix with sugar and salt", "Add soda water", "Serve over ice", "Garnish with mint"],
    category: "beverages",
    prepTime: "5 minutes",
    servings: "2"
  },
  {
    name: "Iced Coffee",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800",
    ingredients: ["Coffee", "Milk", "Sugar", "Ice cubes", "Vanilla", "Whipped cream"],
    steps: ["Brew strong coffee", "Cool completely", "Add milk and sugar", "Serve over ice", "Top with whipped cream"],
    category: "beverages",
    prepTime: "20 minutes",
    servings: "2"
  },
  {
    name: "Buttermilk",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
    ingredients: ["Yogurt", "Water", "Ginger", "Curry leaves", "Salt", "Cumin"],
    steps: ["Whisk yogurt until smooth", "Add water and salt", "Temper with spices", "Mix well", "Serve chilled"],
    category: "beverages",
    prepTime: "10 minutes",
    servings: "3"
  }
];
