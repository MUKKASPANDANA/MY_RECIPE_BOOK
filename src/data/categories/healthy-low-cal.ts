
import { Recipe } from '@/types/Recipe';

export const healthyLowCalRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Grilled Chicken Salad",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800",
    ingredients: ["Chicken breast", "Mixed greens", "Cherry tomatoes", "Cucumber", "Olive oil", "Lemon juice", "Herbs"],
    steps: ["Grill chicken until cooked", "Prepare fresh salad", "Slice chicken", "Make light dressing", "Toss and serve"],
    category: "healthy-low-cal",
    prepTime: "25 minutes",
    servings: "2"
  },
  {
    name: "Steamed Fish",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Fish fillets", "Ginger", "Garlic", "Soy sauce", "Vegetables", "Herbs"],
    steps: ["Season fish with herbs", "Steam until flaky", "Prepare vegetable garnish", "Serve with light sauce"],
    category: "healthy-low-cal",
    prepTime: "20 minutes",
    servings: "2"
  }
];
