
import { Recipe } from '@/types/Recipe';

export const southIndianRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Masala Dosa",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
    ingredients: ["Rice", "Urad dal", "Potatoes", "Onions", "Mustard seeds", "Curry leaves"],
    steps: ["Prepare dosa batter", "Make potato filling", "Spread batter thin", "Add filling and fold", "Serve with chutney"],
    category: "south-indian",
    prepTime: "45 minutes + fermentation",
    servings: "4"
  },
  {
    name: "Sambar",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
    ingredients: ["Toor dal", "Mixed vegetables", "Tamarind", "Sambar powder", "Curry leaves", "Mustard seeds"],
    steps: ["Cook dal until soft", "Prepare tamarind extract", "Add vegetables and spices", "Simmer until cooked", "Temper with spices"],
    category: "south-indian",
    prepTime: "40 minutes",
    servings: "4"
  },
  {
    name: "Rasam",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
    ingredients: ["Tamarind", "Tomatoes", "Rasam powder", "Curry leaves", "Coriander", "Ghee"],
    steps: ["Extract tamarind juice", "Cook with tomatoes", "Add rasam powder", "Temper with spices", "Serve hot with rice"],
    category: "south-indian",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Uttapam",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
    ingredients: ["Dosa batter", "Onions", "Tomatoes", "Green chilies", "Coriander", "Oil"],
    steps: ["Spread thick batter", "Top with vegetables", "Cook until golden", "Flip and cook", "Serve with chutney"],
    category: "south-indian",
    prepTime: "20 minutes",
    servings: "3"
  },
  {
    name: "Coconut Chutney",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Fresh coconut", "Green chilies", "Ginger", "Curry leaves", "Mustard seeds", "Salt"],
    steps: ["Grind coconut with chilies", "Add salt and ginger", "Temper with mustard seeds", "Add curry leaves", "Serve with dosa"],
    category: "south-indian",
    prepTime: "15 minutes",
    servings: "4"
  }
];
