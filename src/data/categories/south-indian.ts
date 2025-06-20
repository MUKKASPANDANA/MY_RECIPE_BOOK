
import { Recipe } from '@/types/Recipe';

export const southIndianRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Dosa",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
    ingredients: ["Rice", "Urad dal", "Fenugreek seeds", "Salt", "Oil", "Potato filling"],
    steps: ["Soak rice and dal", "Grind to smooth batter", "Ferment overnight", "Make thin crepes", "Serve with potato curry"],
    category: "south-indian",
    prepTime: "30 minutes + fermentation",
    servings: "4"
  },
  {
    name: "Sambar",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Toor dal", "Mixed vegetables", "Tamarind", "Sambar powder", "Curry leaves", "Mustard seeds"],
    steps: ["Cook dal until soft", "Prepare tamarind extract", "Add vegetables and spices", "Simmer until cooked", "Temper with spices"],
    category: "south-indian",
    prepTime: "40 minutes",
    servings: "4"
  }
];
