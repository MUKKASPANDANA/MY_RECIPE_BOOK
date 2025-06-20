
import { Recipe } from '@/types/Recipe';

export const bakingCakeRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Vanilla Sponge Cake",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
    ingredients: ["All purpose flour", "Sugar", "Eggs", "Butter", "Baking powder", "Vanilla extract", "Milk"],
    steps: ["Cream butter and sugar", "Add eggs one by one", "Fold in flour alternating with milk", "Bake until golden", "Cool before serving"],
    category: "baking-cakes",
    prepTime: "1 hour",
    servings: "8"
  },
  {
    name: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800",
    ingredients: ["All purpose flour", "Cocoa powder", "Sugar", "Eggs", "Butter", "Baking soda", "Coffee"],
    steps: ["Mix dry ingredients", "Combine wet ingredients", "Fold together gently", "Bake in preheated oven", "Cool and frost if desired"],
    category: "baking-cakes",
    prepTime: "1.5 hours",
    servings: "10"
  }
];
