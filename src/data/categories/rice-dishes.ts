
import { Recipe } from '@/types/Recipe';

export const riceDishRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Chicken Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d117?w=800",
    ingredients: ["Basmati rice", "Chicken", "Yogurt", "Saffron", "Fried onions", "Spices"],
    steps: ["Marinate chicken", "Cook rice partially", "Layer chicken and rice", "Cook on dum", "Serve with raita"],
    category: "rice-dishes",
    prepTime: "2 hours",
    servings: "6"
  },
  {
    name: "Fried Rice",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    ingredients: ["Cooked rice", "Vegetables", "Eggs", "Soy sauce", "Garlic", "Spring onions"],
    steps: ["Heat oil in wok", "Scramble eggs", "Stir-fry vegetables", "Add rice and sauces", "Garnish and serve"],
    category: "rice-dishes",
    prepTime: "20 minutes",
    servings: "4"
  },
  {
    name: "Coconut Rice",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["Basmati rice", "Coconut milk", "Curry leaves", "Mustard seeds", "Cashews"],
    steps: ["Cook rice in coconut milk", "Prepare tempering", "Add cashews", "Mix gently", "Serve warm"],
    category: "rice-dishes",
    prepTime: "25 minutes",
    servings: "4"
  },
  {
    name: "Lemon Rice",
    image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800",
    ingredients: ["Cooked rice", "Lemon juice", "Turmeric", "Curry leaves", "Peanuts", "Mustard seeds"],
    steps: ["Heat oil and add mustard seeds", "Add curry leaves", "Mix with rice", "Add lemon juice", "Serve fresh"],
    category: "rice-dishes",
    prepTime: "15 minutes",
    servings: "3"
  },
  {
    name: "Pulao",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["Basmati rice", "Mixed vegetables", "Whole spices", "Ghee", "Onions"],
    steps: ["Soak rice", "Sauté spices and vegetables", "Add rice and water", "Cook until done", "Rest before serving"],
    category: "rice-dishes",
    prepTime: "35 minutes",
    servings: "4"
  }
];
