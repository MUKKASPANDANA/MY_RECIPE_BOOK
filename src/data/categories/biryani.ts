
import { Recipe } from '@/types/Recipe';

export const biryaniRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Chicken Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d117?w=800",
    ingredients: ["2 cups basmati rice", "500g chicken pieces", "2 onions sliced", "1 cup yogurt", "2 tbsp ginger-garlic paste", "Biryani masala", "Saffron", "Mint leaves", "Coriander leaves", "Ghee"],
    steps: ["Soak rice for 30 minutes", "Marinate chicken with yogurt and spices for 1 hour", "Fry onions until golden brown", "Cook marinated chicken until 70% done", "Boil rice with whole spices until 70% cooked", "Layer rice and chicken alternately", "Sprinkle fried onions, mint, and saffron milk", "Cook on dum for 45 minutes"],
    category: "biryani",
    prepTime: "2 hours",
    servings: "4-5"
  },
  {
    name: "Mutton Biryani",
    image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=800",
    ingredients: ["2 cups basmati rice", "500g mutton pieces", "2 onions", "1 cup yogurt", "Garam masala", "Red chili powder", "Turmeric", "Saffron", "Mint leaves", "Ghee"],
    steps: ["Marinate mutton with yogurt and spices for 2 hours", "Cook mutton until tender", "Prepare rice with whole spices", "Layer cooked mutton and rice", "Garnish with fried onions and herbs", "Cook on dum for 1 hour"],
    category: "biryani",
    prepTime: "3 hours",
    servings: "4-5"
  },
  {
    name: "Vegetable Biryani",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["2 cups basmati rice", "Mixed vegetables", "Paneer cubes", "Cashews", "Raisins", "Biryani masala", "Saffron", "Mint leaves", "Ghee", "Onions"],
    steps: ["Soak rice for 30 minutes", "Sauté vegetables with spices", "Cook rice with whole spices until 70% done", "Layer vegetables and rice", "Sprinkle nuts, raisins, and herbs", "Cook on dum for 30 minutes"],
    category: "biryani",
    prepTime: "1.5 hours",
    servings: "4"
  },
  {
    name: "Egg Biryani",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
    ingredients: ["2 cups basmati rice", "6 boiled eggs", "2 onions", "Tomatoes", "Yogurt", "Biryani masala", "Saffron", "Mint leaves", "Coriander leaves", "Ghee"],
    steps: ["Boil and fry eggs until golden", "Prepare masala gravy", "Cook rice with whole spices", "Layer eggs and rice with gravy", "Garnish with herbs and fried onions", "Cook on dum for 35 minutes"],
    category: "biryani",
    prepTime: "1.5 hours",
    servings: "3-4"
  }
];
