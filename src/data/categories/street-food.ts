
import { Recipe } from '@/types/Recipe';

export const streetFoodRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Pani Puri",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Puri shells", "Boiled potatoes", "Chickpeas", "Tamarind water", "Mint chutney", "Spices"],
    steps: ["Prepare spiced water", "Make mint chutney", "Fill puris with filling", "Add chutneys", "Serve immediately"],
    category: "street-food",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Bhel Puri",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    ingredients: ["Puffed rice", "Sev", "Onions", "Tomatoes", "Chutneys", "Coriander", "Lemon"],
    steps: ["Mix puffed rice with vegetables", "Add chutneys", "Top with sev", "Garnish with coriander", "Serve immediately"],
    category: "street-food",
    prepTime: "15 minutes",
    servings: "3"
  },
  {
    name: "Dahi Vada",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Urad dal", "Yogurt", "Tamarind chutney", "Mint chutney", "Chaat masala", "Sev"],
    steps: ["Make vada batter", "Deep fry until golden", "Soak in water", "Top with yogurt", "Add chutneys and spices"],
    category: "street-food",
    prepTime: "1 hour",
    servings: "4"
  },
  {
    name: "Aloo Tikki",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Potatoes", "Spices", "Breadcrumbs", "Oil", "Chutneys", "Onions"],
    steps: ["Mash potatoes with spices", "Shape into patties", "Coat with breadcrumbs", "Shallow fry", "Serve with chutneys"],
    category: "street-food",
    prepTime: "45 minutes",
    servings: "4"
  },
  {
    name: "Chole Kulche",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Chickpeas", "Kulcha bread", "Onions", "Tomatoes", "Spices", "Yogurt"],
    steps: ["Cook spiced chickpeas", "Prepare kulcha", "Serve chickpeas with bread", "Add onions and yogurt", "Popular street combo"],
    category: "street-food",
    prepTime: "1 hour",
    servings: "4"
  }
];
