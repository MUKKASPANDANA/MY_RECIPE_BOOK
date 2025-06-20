
import { Recipe } from '@/types/Recipe';

export const healthyRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Grilled Chicken Salad",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800",
    ingredients: ["Chicken breast", "Mixed greens", "Cherry tomatoes", "Cucumber", "Olive oil", "Lemon"],
    steps: ["Grill chicken until cooked", "Prepare fresh salad", "Slice chicken", "Make light dressing", "Toss and serve"],
    category: "healthy",
    prepTime: "25 minutes",
    servings: "2"
  },
  {
    name: "Steamed Fish",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Fish fillets", "Ginger", "Garlic", "Soy sauce", "Vegetables", "Herbs"],
    steps: ["Season fish with herbs", "Steam until flaky", "Prepare vegetable garnish", "Serve with light sauce", "Healthy and delicious"],
    category: "healthy",
    prepTime: "20 minutes",
    servings: "2"
  },
  {
    name: "Quinoa Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    ingredients: ["Quinoa", "Roasted vegetables", "Chickpeas", "Avocado", "Tahini dressing", "Seeds"],
    steps: ["Cook quinoa", "Roast vegetables", "Assemble bowl", "Drizzle with dressing", "Top with seeds"],
    category: "healthy",
    prepTime: "35 minutes",
    servings: "2"
  },
  {
    name: "Green Smoothie",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800",
    ingredients: ["Spinach", "Banana", "Apple", "Yogurt", "Honey", "Chia seeds"],
    steps: ["Wash spinach", "Blend all fruits", "Add yogurt and honey", "Blend until smooth", "Top with chia seeds"],
    category: "healthy",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Veggie Wrap",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    ingredients: ["Whole wheat tortilla", "Hummus", "Mixed vegetables", "Sprouts", "Lettuce", "Avocado"],
    steps: ["Spread hummus on tortilla", "Add fresh vegetables", "Roll tightly", "Cut in half", "Serve fresh"],
    category: "healthy",
    prepTime: "15 minutes",
    servings: "2"
  }
];
