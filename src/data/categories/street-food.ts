
import { Recipe } from '@/types/Recipe';

export const streetFoodRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Pani Puri",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Puri shells", "Boiled potatoes", "Chickpeas", "Tamarind water", "Mint chutney", "Spices", "Onions"],
    steps: ["Prepare spiced water", "Make mint chutney", "Fill puris with potato and chickpeas", "Add chutneys", "Serve immediately"],
    category: "street-food",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Bhel Puri",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    ingredients: ["Puffed rice", "Sev", "Onions", "Tomatoes", "Chutneys", "Coriander", "Lemon juice"],
    steps: ["Mix puffed rice with vegetables", "Add chutneys", "Top with sev", "Garnish with coriander", "Serve immediately"],
    category: "street-food",
    prepTime: "15 minutes",
    servings: "3"
  }
];
