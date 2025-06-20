
import { Recipe } from '@/types/Recipe';

export const northIndianRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Butter Chicken",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
    ingredients: ["Chicken", "Tomatoes", "Cream", "Butter", "Garam masala", "Ginger-garlic paste"],
    steps: ["Marinate chicken", "Make tomato gravy", "Add cream and butter", "Simmer with spices", "Garnish and serve"],
    category: "north-indian",
    prepTime: "45 minutes",
    servings: "4"
  },
  {
    name: "Rajma",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
    ingredients: ["Kidney beans", "Onions", "Tomatoes", "Ginger-garlic paste", "Spices", "Cream"],
    steps: ["Soak and cook beans", "Make onion-tomato gravy", "Add beans and spices", "Simmer until thick", "Serve with rice"],
    category: "north-indian",
    prepTime: "1.5 hours",
    servings: "4"
  },
  {
    name: "Chole Bhature",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Chickpeas", "All purpose flour", "Yogurt", "Spices", "Oil", "Onions"],
    steps: ["Cook spiced chickpeas", "Make bhature dough", "Roll and deep fry", "Serve hot together", "Classic combo"],
    category: "north-indian",
    prepTime: "1 hour",
    servings: "4"
  },
  {
    name: "Aloo Gobi",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    ingredients: ["Potatoes", "Cauliflower", "Onions", "Tomatoes", "Turmeric", "Spices"],
    steps: ["Boil vegetables partially", "Sauté onions and tomatoes", "Add spices", "Add vegetables", "Cook until tender"],
    category: "north-indian",
    prepTime: "35 minutes",
    servings: "4"
  },
  {
    name: "Paneer Makhani",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["Paneer", "Tomatoes", "Cream", "Butter", "Cashews", "Spices"],
    steps: ["Make rich tomato gravy", "Add cream and butter", "Add paneer cubes", "Simmer gently", "Serve with naan"],
    category: "north-indian",
    prepTime: "40 minutes",
    servings: "4"
  }
];
