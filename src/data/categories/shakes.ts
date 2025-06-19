
import { Recipe } from '@/types/Recipe';

export const shakeRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Mango Shake",
    image: "https://images.unsplash.com/photo-1548373902-d5b6ad046224?w=800",
    ingredients: ["2 ripe mangoes", "1 cup milk", "2 tbsp sugar", "Ice cubes", "Cardamom powder"],
    steps: ["Peel and chop mangoes", "Blend mangoes with milk and sugar", "Add ice cubes and cardamom", "Blend until smooth", "Serve chilled with garnish"],
    category: "shakes",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Chocolate Shake",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800",
    ingredients: ["2 cups milk", "3 tbsp cocoa powder", "2 tbsp sugar", "Vanilla ice cream", "Chocolate chips", "Whipped cream"],
    steps: ["Heat milk slightly", "Mix cocoa powder and sugar", "Blend with ice cream", "Add chocolate chips", "Top with whipped cream", "Serve immediately"],
    category: "shakes",
    prepTime: "8 minutes",
    servings: "2"
  },
  {
    name: "Banana Shake",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
    ingredients: ["3 ripe bananas", "1.5 cups milk", "2 tbsp honey", "Vanilla extract", "Ice cubes", "Nuts for garnish"],
    steps: ["Peel and slice bananas", "Blend bananas with milk", "Add honey and vanilla", "Blend with ice cubes", "Garnish with nuts", "Serve fresh"],
    category: "shakes",
    prepTime: "5 minutes",
    servings: "2"
  },
  {
    name: "Strawberry Shake",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    ingredients: ["1 cup fresh strawberries", "1 cup milk", "2 tbsp sugar", "Vanilla ice cream", "Ice cubes", "Fresh strawberries for garnish"],
    steps: ["Wash and hull strawberries", "Blend strawberries with milk", "Add sugar and ice cream", "Blend until smooth", "Garnish with fresh strawberries", "Serve chilled"],
    category: "shakes",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Oreo Shake",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800",
    ingredients: ["8 Oreo cookies", "1.5 cups milk", "Vanilla ice cream", "Chocolate syrup", "Whipped cream", "Crushed Oreos for topping"],
    steps: ["Crush 6 Oreo cookies", "Blend with milk and ice cream", "Add chocolate syrup", "Blend until smooth", "Top with whipped cream", "Garnish with crushed Oreos"],
    category: "shakes",
    prepTime: "8 minutes",
    servings: "2"
  }
];
