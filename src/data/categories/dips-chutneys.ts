
import { Recipe } from '@/types/Recipe';

export const dipChutneyRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Mint Chutney",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Fresh mint leaves", "Coriander leaves", "Green chilies", "Ginger", "Lemon juice", "Salt"],
    steps: ["Wash herbs thoroughly", "Blend with other ingredients", "Add water as needed", "Store in refrigerator", "Serve with snacks"],
    category: "dips-chutneys",
    prepTime: "10 minutes",
    servings: "4"
  },
  {
    name: "Tamarind Chutney",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    ingredients: ["Tamarind paste", "Jaggery", "Red chili powder", "Cumin powder", "Salt", "Water"],
    steps: ["Extract tamarind paste", "Cook with jaggery", "Add spices", "Simmer until thick", "Cool and store"],
    category: "dips-chutneys",
    prepTime: "20 minutes",
    servings: "6"
  }
];
