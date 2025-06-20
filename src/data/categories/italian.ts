
import { Recipe } from '@/types/Recipe';

export const italianRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Pasta Marinara",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800",
    ingredients: ["Pasta", "Tomatoes", "Garlic", "Basil", "Olive oil", "Onions", "Parmesan cheese"],
    steps: ["Cook pasta al dente", "Make marinara sauce", "Combine pasta with sauce", "Garnish with basil", "Serve with parmesan"],
    category: "italian",
    prepTime: "25 minutes",
    servings: "3"
  },
  {
    name: "Margherita Pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Fresh basil", "Olive oil"],
    steps: ["Roll out pizza dough", "Spread tomato sauce", "Add mozzarella cheese", "Bake until golden", "Top with fresh basil"],
    category: "italian",
    prepTime: "30 minutes",
    servings: "2"
  }
];
