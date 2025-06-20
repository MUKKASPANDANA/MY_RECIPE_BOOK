
import { Recipe } from '@/types/Recipe';

export const snackRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Samosa",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    ingredients: ["All purpose flour", "Potatoes", "Green peas", "Spices", "Oil", "Coriander"],
    steps: ["Make dough", "Prepare spiced potato filling", "Shape into triangles", "Deep fry until golden", "Serve with chutney"],
    category: "snacks",
    prepTime: "1 hour",
    servings: "6"
  },
  {
    name: "Pakora",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Chickpea flour", "Mixed vegetables", "Onions", "Spices", "Oil", "Water"],
    steps: ["Make batter", "Add chopped vegetables", "Deep fry spoonfuls", "Serve hot with sauce", "Enjoy crispy fritters"],
    category: "snacks",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Dhokla",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
    ingredients: ["Gram flour", "Yogurt", "Ginger", "Green chili", "Mustard seeds", "Curry leaves"],
    steps: ["Make batter with gram flour", "Steam until spongy", "Prepare tempering", "Pour over dhokla", "Cut and serve"],
    category: "snacks",
    prepTime: "45 minutes",
    servings: "6"
  },
  {
    name: "Vada Pav",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Bread buns", "Potato", "Chickpea flour", "Spices", "Chutneys", "Oil"],
    steps: ["Make spiced potato balls", "Coat in batter", "Deep fry until golden", "Serve in buns with chutney", "Mumbai street food special"],
    category: "snacks",
    prepTime: "40 minutes",
    servings: "4"
  },
  {
    name: "Spring Rolls",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    ingredients: ["Spring roll wrappers", "Cabbage", "Carrots", "Bell peppers", "Soy sauce", "Oil"],
    steps: ["Prepare vegetable filling", "Wrap in spring roll sheets", "Deep fry until crispy", "Serve with dipping sauce", "Enjoy crunchy texture"],
    category: "snacks",
    prepTime: "35 minutes",
    servings: "5"
  }
];
