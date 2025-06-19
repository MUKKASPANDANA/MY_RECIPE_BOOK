
import { Recipe } from '@/types/Recipe';

export const friedRiceRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Chicken Fried Rice",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    ingredients: ["2 cups cooked rice", "200g chicken breast", "2 eggs", "Mixed vegetables", "Soy sauce", "Garlic", "Ginger", "Spring onions", "Sesame oil", "Salt"],
    steps: ["Cook rice and let it cool", "Cut chicken into small pieces", "Scramble eggs and set aside", "Stir-fry chicken until cooked", "Add vegetables and cook", "Add rice and seasonings", "Mix in eggs and spring onions", "Serve hot"],
    category: "fried-rice",
    prepTime: "25 minutes",
    servings: "3-4"
  },
  {
    name: "Vegetable Fried Rice",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["2 cups cooked rice", "Mixed vegetables", "2 eggs", "Soy sauce", "Garlic", "Ginger", "Spring onions", "Sesame oil", "Salt", "White pepper"],
    steps: ["Heat oil in wok", "Scramble eggs and set aside", "Stir-fry vegetables", "Add garlic and ginger", "Add rice and mix well", "Season with soy sauce", "Add eggs and spring onions", "Serve immediately"],
    category: "fried-rice",
    prepTime: "20 minutes",
    servings: "3-4"
  },
  {
    name: "Prawn Fried Rice",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["2 cups cooked rice", "300g prawns", "2 eggs", "Vegetables", "Soy sauce", "Fish sauce", "Garlic", "Chili", "Spring onions", "Oil"],
    steps: ["Clean and devein prawns", "Heat oil and scramble eggs", "Stir-fry prawns until pink", "Add vegetables and cook", "Add rice and sauces", "Mix everything well", "Garnish with spring onions", "Serve hot"],
    category: "fried-rice",
    prepTime: "25 minutes",
    servings: "3-4"
  },
  {
    name: "Mushroom Fried Rice",
    image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800",
    ingredients: ["2 cups cooked rice", "200g mushrooms", "2 eggs", "Soy sauce", "Garlic", "Ginger", "Spring onions", "Sesame oil", "Salt", "Black pepper"],
    steps: ["Slice mushrooms", "Scramble eggs and set aside", "Stir-fry mushrooms until golden", "Add garlic and ginger", "Add rice and seasonings", "Mix in scrambled eggs", "Garnish with spring onions", "Serve immediately"],
    category: "fried-rice",
    prepTime: "20 minutes",
    servings: "3"
  },
  {
    name: "Thai Pineapple Fried Rice",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800",
    ingredients: ["2 cups jasmine rice", "1 cup pineapple chunks", "200g shrimp", "Cashews", "Raisins", "Fish sauce", "Soy sauce", "Curry powder", "Garlic", "Chili"],
    steps: ["Cook jasmine rice", "Stir-fry shrimp until cooked", "Add garlic and chili", "Add rice and curry powder", "Mix in pineapple chunks", "Add cashews and raisins", "Season with sauces", "Serve in pineapple shell if available"],
    category: "fried-rice",
    prepTime: "30 minutes",
    servings: "4"
  }
];
