
import { Recipe } from '@/types/Recipe';

export const breakfastRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Idli",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
    ingredients: ["Idli rice", "Urad dal", "Salt", "Water", "Fenugreek seeds"],
    steps: ["Soak rice and dal separately", "Grind to smooth batter", "Ferment overnight", "Steam in idli maker", "Serve with chutney"],
    category: "breakfast",
    prepTime: "30 minutes + overnight fermentation",
    servings: "4"
  },
  {
    name: "Poha",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Flattened rice", "Onions", "Curry leaves", "Mustard seeds", "Turmeric", "Green chilies", "Peanuts"],
    steps: ["Wash and drain poha", "Heat oil and add mustard seeds", "Add onions and spices", "Mix in poha gently", "Garnish with coriander"],
    category: "breakfast",
    prepTime: "20 minutes",
    servings: "3"
  },
  {
    name: "Upma",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["Semolina", "Vegetables", "Mustard seeds", "Curry leaves", "Ginger", "Green chilies"],
    steps: ["Roast semolina until golden", "Prepare tempering", "Add vegetables", "Add water and semolina", "Cook until thick"],
    category: "breakfast",
    prepTime: "25 minutes",
    servings: "4"
  },
  {
    name: "Dosa",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
    ingredients: ["Rice", "Urad dal", "Fenugreek seeds", "Salt", "Oil", "Potato filling"],
    steps: ["Soak rice and dal", "Grind to smooth batter", "Ferment overnight", "Make thin crepes", "Serve with potato curry"],
    category: "breakfast",
    prepTime: "30 minutes + fermentation",
    servings: "4"
  },
  {
    name: "Oats Porridge",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
    ingredients: ["Oats", "Milk", "Honey", "Nuts", "Fruits", "Cinnamon"],
    steps: ["Boil milk", "Add oats and cook", "Sweeten with honey", "Add nuts and fruits", "Serve warm"],
    category: "breakfast",
    prepTime: "15 minutes",
    servings: "2"
  }
];
