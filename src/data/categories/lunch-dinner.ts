
import { Recipe } from '@/types/Recipe';

export const lunchDinnerRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Dal Tadka",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
    ingredients: ["Toor dal", "Onions", "Tomatoes", "Garlic", "Cumin", "Turmeric", "Ghee"],
    steps: ["Pressure cook dal", "Make tadka with spices", "Add tomatoes and onions", "Mix with cooked dal", "Simmer and serve"],
    category: "lunch-dinner",
    prepTime: "35 minutes",
    servings: "4"
  },
  {
    name: "Chicken Curry",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d117?w=800",
    ingredients: ["Chicken", "Onions", "Tomatoes", "Spices", "Coconut milk", "Ginger-garlic paste"],
    steps: ["Marinate chicken", "Cook onion-tomato base", "Add chicken and spices", "Simmer with coconut milk", "Garnish and serve"],
    category: "lunch-dinner",
    prepTime: "45 minutes",
    servings: "4"
  },
  {
    name: "Vegetable Biryani",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["Basmati rice", "Mixed vegetables", "Saffron", "Mint", "Fried onions", "Spices"],
    steps: ["Soak rice", "Cook vegetables with spices", "Layer rice and vegetables", "Cook on dum", "Serve with raita"],
    category: "lunch-dinner",
    prepTime: "1 hour",
    servings: "6"
  },
  {
    name: "Palak Paneer",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    ingredients: ["Spinach", "Paneer", "Onions", "Tomatoes", "Cream", "Spices"],
    steps: ["Blanch spinach and puree", "Fry paneer cubes", "Make onion-tomato gravy", "Add spinach puree", "Add paneer and cream"],
    category: "lunch-dinner",
    prepTime: "40 minutes",
    servings: "4"
  },
  {
    name: "Fish Curry",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Fish fillets", "Coconut milk", "Tamarind", "Curry leaves", "Spices", "Onions"],
    steps: ["Marinate fish", "Make coconut-based gravy", "Add fish and simmer", "Season with tamarind", "Garnish with curry leaves"],
    category: "lunch-dinner",
    prepTime: "35 minutes",
    servings: "4"
  }
];
