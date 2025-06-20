
import { Recipe } from '@/types/Recipe';

export const breadRotiRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Butter Naan",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
    ingredients: ["All purpose flour", "Yogurt", "Baking powder", "Salt", "Butter", "Garlic"],
    steps: ["Make soft dough", "Rest for 2 hours", "Roll into ovals", "Cook on hot pan", "Brush with butter"],
    category: "bread-roti",
    prepTime: "3 hours",
    servings: "6"
  },
  {
    name: "Chapati",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
    ingredients: ["Whole wheat flour", "Water", "Salt", "Oil"],
    steps: ["Make soft dough", "Rest for 30 minutes", "Roll thin circles", "Cook on griddle", "Serve warm"],
    category: "bread-roti",
    prepTime: "45 minutes",
    servings: "8"
  },
  {
    name: "Aloo Paratha",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Wheat flour", "Boiled potatoes", "Spices", "Oil", "Coriander leaves"],
    steps: ["Make dough", "Prepare potato filling", "Stuff and roll", "Cook with oil", "Serve with yogurt"],
    category: "bread-roti",
    prepTime: "40 minutes",
    servings: "4"
  },
  {
    name: "Pita Bread",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["All purpose flour", "Yeast", "Salt", "Olive oil", "Warm water"],
    steps: ["Mix dough ingredients", "Knead and rise", "Roll into circles", "Bake at high heat", "Serve warm"],
    category: "bread-roti",
    prepTime: "2 hours",
    servings: "8"
  },
  {
    name: "Garlic Bread",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Baguette", "Butter", "Garlic", "Parsley", "Parmesan cheese", "Salt"],
    steps: ["Slice bread", "Make garlic butter", "Spread on bread", "Top with cheese", "Bake until golden"],
    category: "bread-roti",
    prepTime: "20 minutes",
    servings: "4"
  }
];
