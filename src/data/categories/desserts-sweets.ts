
import { Recipe } from '@/types/Recipe';

export const dessertSweetRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Gulab Jamun",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
    ingredients: ["Milk powder", "All purpose flour", "Ghee", "Sugar", "Water", "Cardamom", "Rose water"],
    steps: ["Make soft dough", "Form small balls", "Deep fry until golden", "Prepare sugar syrup", "Soak fried balls in syrup"],
    category: "desserts-sweets",
    prepTime: "45 minutes",
    servings: "6"
  },
  {
    name: "Kheer",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    ingredients: ["Rice", "Milk", "Sugar", "Cardamom", "Almonds", "Cashews", "Raisins"],
    steps: ["Cook rice in milk", "Add sugar and cardamom", "Simmer until thick", "Garnish with nuts", "Serve warm or cold"],
    category: "desserts-sweets",
    prepTime: "40 minutes",
    servings: "4"
  }
];
