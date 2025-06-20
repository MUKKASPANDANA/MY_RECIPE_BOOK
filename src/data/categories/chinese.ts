
import { Recipe } from '@/types/Recipe';

export const chineseRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Sweet and Sour Chicken",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d117?w=800",
    ingredients: ["Chicken", "Bell peppers", "Pineapple", "Sweet and sour sauce", "Cornstarch", "Oil"],
    steps: ["Coat chicken in cornstarch", "Deep fry until golden", "Stir-fry vegetables", "Add sauce and chicken", "Serve hot"],
    category: "chinese",
    prepTime: "35 minutes",
    servings: "4"
  },
  {
    name: "Manchurian",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["Cauliflower", "All purpose flour", "Soy sauce", "Chili sauce", "Garlic", "Ginger"],
    steps: ["Make batter", "Coat cauliflower", "Deep fry", "Make sauce", "Toss and serve"],
    category: "chinese",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Hot and Sour Soup",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
    ingredients: ["Tofu", "Mushrooms", "Vinegar", "Soy sauce", "Cornstarch", "Egg"],
    steps: ["Heat broth", "Add vegetables", "Season with sauces", "Thicken with cornstarch", "Add beaten egg"],
    category: "chinese",
    prepTime: "20 minutes",
    servings: "3"
  },
  {
    name: "Spring Rolls",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    ingredients: ["Spring roll wrappers", "Cabbage", "Carrots", "Bean sprouts", "Soy sauce", "Oil"],
    steps: ["Prepare filling", "Wrap in sheets", "Deep fry", "Serve with sauce", "Enjoy crispy"],
    category: "chinese",
    prepTime: "40 minutes",
    servings: "6"
  },
  {
    name: "Chow Mein",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    ingredients: ["Chow mein noodles", "Cabbage", "Carrots", "Soy sauce", "Garlic", "Oil"],
    steps: ["Boil noodles", "Stir-fry vegetables", "Add noodles", "Season with sauce", "Serve immediately"],
    category: "chinese",
    prepTime: "25 minutes",
    servings: "3"
  }
];
