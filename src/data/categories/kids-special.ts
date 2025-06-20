
import { Recipe } from '@/types/Recipe';

export const kidsSpecialRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Mini Pancakes",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    ingredients: ["All purpose flour", "Milk", "Eggs", "Sugar", "Baking powder", "Butter", "Maple syrup"],
    steps: ["Mix dry ingredients", "Combine wet ingredients", "Make small pancakes", "Cook until fluffy", "Serve with syrup"],
    category: "kids-special",
    prepTime: "20 minutes",
    servings: "4"
  },
  {
    name: "Fruit Popsicles",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800",
    ingredients: ["Mixed fruits", "Fruit juice", "Honey", "Water", "Popsicle molds"],
    steps: ["Puree fruits", "Mix with juice and honey", "Pour into molds", "Freeze until solid", "Enjoy as treats"],
    category: "kids-special",
    prepTime: "4 hours",
    servings: "6"
  }
];
