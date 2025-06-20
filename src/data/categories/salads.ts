
import { Recipe } from '@/types/Recipe';

export const saladRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Greek Salad",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800",
    ingredients: ["Cucumber", "Tomatoes", "Red onion", "Feta cheese", "Olives", "Olive oil"],
    steps: ["Chop vegetables", "Crumble feta", "Mix all ingredients", "Drizzle with olive oil", "Season and serve"],
    category: "salads",
    prepTime: "15 minutes",
    servings: "4"
  },
  {
    name: "Caesar Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    ingredients: ["Romaine lettuce", "Croutons", "Parmesan", "Caesar dressing", "Anchovies"],
    steps: ["Wash and chop lettuce", "Make Caesar dressing", "Toss with dressing", "Add croutons", "Top with parmesan"],
    category: "salads",
    prepTime: "20 minutes",
    servings: "3"
  },
  {
    name: "Fruit Salad",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800",
    ingredients: ["Mixed fruits", "Honey", "Lemon juice", "Mint leaves", "Chaat masala"],
    steps: ["Chop fruits", "Mix in bowl", "Drizzle honey and lemon", "Add chaat masala", "Garnish with mint"],
    category: "salads",
    prepTime: "15 minutes",
    servings: "4"
  },
  {
    name: "Quinoa Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    ingredients: ["Quinoa", "Cherry tomatoes", "Cucumber", "Bell peppers", "Lemon dressing"],
    steps: ["Cook quinoa", "Chop vegetables", "Mix quinoa and vegetables", "Prepare lemon dressing", "Toss and serve"],
    category: "salads",
    prepTime: "25 minutes",
    servings: "4"
  },
  {
    name: "Chickpea Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    ingredients: ["Chickpeas", "Onions", "Tomatoes", "Cucumber", "Coriander", "Lemon juice"],
    steps: ["Boil chickpeas", "Chop vegetables", "Mix all ingredients", "Season with lemon", "Serve fresh"],
    category: "salads",
    prepTime: "20 minutes",
    servings: "3"
  }
];
