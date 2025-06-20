
import { Recipe } from '@/types/Recipe';

export const rotiParathaRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Roti",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
    ingredients: ["Whole wheat flour", "Water", "Salt", "Oil"],
    steps: ["Make soft dough", "Rest for 30 minutes", "Roll into circles", "Cook on hot griddle", "Serve warm"],
    category: "roti-paratha",
    prepTime: "45 minutes",
    servings: "4"
  },
  {
    name: "Aloo Paratha",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Whole wheat flour", "Boiled potatoes", "Spices", "Oil", "Coriander leaves"],
    steps: ["Make dough", "Prepare spiced potato filling", "Roll and fill parathas", "Cook with oil until golden", "Serve with yogurt"],
    category: "roti-paratha",
    prepTime: "40 minutes",
    servings: "4"
  }
];
