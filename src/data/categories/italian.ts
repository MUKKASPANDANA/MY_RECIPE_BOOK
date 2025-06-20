
import { Recipe } from '@/types/Recipe';

export const italianRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Margherita Pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Fresh basil", "Olive oil"],
    steps: ["Roll pizza dough", "Spread tomato sauce", "Add mozzarella", "Bake until golden", "Top with basil"],
    category: "italian",
    prepTime: "30 minutes",
    servings: "2"
  },
  {
    name: "Lasagna",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800",
    ingredients: ["Lasagna sheets", "Ground meat", "Ricotta", "Mozzarella", "Tomato sauce", "Parmesan"],
    steps: ["Cook pasta sheets", "Make meat sauce", "Layer pasta and fillings", "Top with cheese", "Bake until bubbly"],
    category: "italian",
    prepTime: "1.5 hours",
    servings: "8"
  },
  {
    name: "Risotto",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["Arborio rice", "Vegetable broth", "White wine", "Parmesan", "Butter", "Onions"],
    steps: ["Sauté onions", "Add rice and toast", "Add wine and broth gradually", "Stir constantly", "Finish with cheese"],
    category: "italian",
    prepTime: "45 minutes",
    servings: "4"
  },
  {
    name: "Bruschetta",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Baguette", "Tomatoes", "Garlic", "Basil", "Olive oil", "Balsamic vinegar"],
    steps: ["Toast bread slices", "Rub with garlic", "Top with tomato mixture", "Drizzle with oil", "Serve immediately"],
    category: "italian",
    prepTime: "20 minutes",
    servings: "4"
  },
  {
    name: "Tiramisu",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800",
    ingredients: ["Ladyfingers", "Mascarpone", "Coffee", "Eggs", "Sugar", "Cocoa powder"],
    steps: ["Make coffee mixture", "Whip mascarpone", "Layer biscuits and cream", "Refrigerate overnight", "Dust with cocoa"],
    category: "italian",
    prepTime: "4 hours",
    servings: "6"
  }
];
