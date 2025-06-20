
import { Recipe } from '@/types/Recipe';

export const snackRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Samosa",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    ingredients: ["All purpose flour", "Potatoes", "Green peas", "Spices", "Oil for frying", "Ginger", "Green chilies", "Coriander leaves"],
    steps: ["Make dough for covering", "Prepare spiced potato filling", "Roll and fill triangular shapes", "Deep fry until golden", "Serve hot with chutney"],
    category: "snacks",
    prepTime: "1 hour",
    servings: "6"
  },
  {
    name: "Pakora",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Chickpea flour", "Mixed vegetables", "Onions", "Spices", "Oil for frying", "Water", "Salt"],
    steps: ["Make batter with chickpea flour", "Add chopped vegetables", "Deep fry spoonfuls of batter", "Serve hot with sauce"],
    category: "snacks",
    prepTime: "30 minutes",
    servings: "4"
  }
];
