
import { Recipe } from '@/types/Recipe';

export const breakfastRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Idli",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
    ingredients: ["Idli rice", "Urad dal", "Salt", "Water", "Fenugreek seeds"],
    steps: ["Soak rice and dal separately", "Grind to smooth batter", "Ferment overnight", "Steam in idli maker", "Serve with chutney"],
    category: "breakfast",
    prepTime: "30 minutes + overnight fermentation",
    servings: "4"
  },
  {
    name: "Poha",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Flattened rice", "Onions", "Curry leaves", "Mustard seeds", "Turmeric", "Green chilies", "Peanuts"],
    steps: ["Wash and drain poha", "Heat oil and add mustard seeds", "Add onions and spices", "Mix in poha gently", "Garnish with coriander"],
    category: "breakfast",
    prepTime: "20 minutes",
    servings: "3"
  }
];
