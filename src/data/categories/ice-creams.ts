
import { Recipe } from '@/types/Recipe';

export const iceCreamRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Vanilla Ice Cream",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    ingredients: ["Heavy cream", "Milk", "Sugar", "Egg yolks", "Vanilla extract"],
    steps: ["Heat milk and cream", "Whisk egg yolks with sugar", "Temper eggs with hot milk", "Cook until thick", "Churn in ice cream maker"],
    category: "ice-creams",
    prepTime: "4 hours",
    servings: "6"
  },
  {
    name: "Kulfi",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
    ingredients: ["Full fat milk", "Sugar", "Cardamom", "Pistachios", "Almonds"],
    steps: ["Boil milk until thick", "Add sugar and cardamom", "Cool completely", "Pour into molds", "Freeze until set"],
    category: "ice-creams",
    prepTime: "6 hours",
    servings: "4"
  }
];
