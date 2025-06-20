
import { Recipe } from '@/types/Recipe';

export const dessertRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Gulab Jamun",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
    ingredients: ["Milk powder", "All purpose flour", "Ghee", "Sugar", "Cardamom", "Rose water"],
    steps: ["Make soft dough", "Form small balls", "Deep fry until golden", "Soak in sugar syrup", "Serve warm"],
    category: "desserts",
    prepTime: "45 minutes",
    servings: "6"
  },
  {
    name: "Kheer",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    ingredients: ["Rice", "Milk", "Sugar", "Cardamom", "Almonds", "Pistachios"],
    steps: ["Cook rice in milk", "Add sugar and cardamom", "Simmer until thick", "Garnish with nuts", "Serve chilled"],
    category: "desserts",
    prepTime: "40 minutes",
    servings: "4"
  },
  {
    name: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800",
    ingredients: ["Flour", "Cocoa powder", "Sugar", "Eggs", "Butter", "Baking powder"],
    steps: ["Mix dry ingredients", "Cream butter and sugar", "Add eggs", "Fold in flour", "Bake until done"],
    category: "desserts",
    prepTime: "1 hour",
    servings: "8"
  },
  {
    name: "Kulfi",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
    ingredients: ["Full fat milk", "Sugar", "Cardamom", "Pistachios", "Almonds"],
    steps: ["Boil milk until thick", "Add sugar and cardamom", "Cool completely", "Pour into molds", "Freeze until set"],
    category: "desserts",
    prepTime: "4 hours",
    servings: "6"
  },
  {
    name: "Tiramisu",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800",
    ingredients: ["Ladyfingers", "Mascarpone", "Coffee", "Eggs", "Sugar", "Cocoa powder"],
    steps: ["Make coffee mixture", "Whip mascarpone cream", "Layer biscuits and cream", "Refrigerate overnight", "Dust with cocoa"],
    category: "desserts",
    prepTime: "30 minutes + overnight chilling",
    servings: "6"
  }
];
