
import { Recipe } from '@/types/Recipe';

export const tandooriRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Tandoori Chicken",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d117?w=800",
    ingredients: ["Chicken", "Yogurt", "Tandoori masala", "Ginger-garlic paste", "Lemon juice", "Red food color", "Oil"],
    steps: ["Marinate chicken for 4 hours", "Preheat oven to high", "Cook until charred", "Baste with oil", "Serve with onions"],
    category: "tandoori",
    prepTime: "30 minutes + 4 hours marination",
    servings: "4"
  },
  {
    name: "Tandoori Roti",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
    ingredients: ["Whole wheat flour", "Water", "Salt", "Oil", "Yogurt"],
    steps: ["Make soft dough with yogurt", "Rest for 1 hour", "Roll into ovals", "Cook in hot oven", "Brush with butter"],
    category: "tandoori",
    prepTime: "1.5 hours",
    servings: "4"
  }
];
