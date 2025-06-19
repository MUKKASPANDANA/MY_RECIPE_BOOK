import { Recipe } from '@/types/Recipe';

export const saladRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Greek Salad",
    image: "https://images.unsplash.com/photo-1604908177522-dfb86e52b498?w=800",
    ingredients: ["Cucumber", "Tomatoes", "Red onion", "Feta cheese", "Kalamata olives", "Olive oil", "Oregano", "Salt", "Black pepper"],
    steps: ["Chop cucumber, tomatoes, and red onion", "Add feta and olives", "Drizzle with olive oil", "Season with salt, pepper, and oregano", "Toss gently and serve fresh"],
    category: "salads",
    prepTime: "15 minutes",
    servings: "2-3"
  },
  {
    name: "Chickpea Salad",
    image: "https://images.unsplash.com/photo-1550418290-a8d86ad674d4?w=800",
    ingredients: ["Boiled chickpeas", "Cherry tomatoes", "Cucumber", "Red onion", "Coriander leaves", "Lemon juice", "Olive oil", "Salt", "Cumin powder"],
    steps: ["Mix chickpeas with chopped vegetables", "Add coriander leaves", "Drizzle with lemon juice and olive oil", "Season with salt and cumin", "Toss and chill before serving"],
    category: "salads",
    prepTime: "20 minutes",
    servings: "3"
  },
  {
    name: "Quinoa Avocado Salad",
    image: "https://images.unsplash.com/photo-1572441710538-6a11f8e1f094?w=800",
    ingredients: ["Cooked quinoa", "Avocado", "Bell peppers", "Corn", "Black beans", "Lime juice", "Salt", "Pepper", "Olive oil"],
    steps: ["Cook and cool quinoa", "Chop avocado and veggies", "Combine all ingredients", "Drizzle with olive oil and lime juice", "Season and mix well"],
    category: "salads",
    prepTime: "25 minutes",
    servings: "2-3"
  },
  {
    name: "Fruit and Nut Salad",
    image: "https://images.unsplash.com/photo-1613145999734-b3e112415b15?w=800",
    ingredients: ["Apple", "Orange", "Pomegranate", "Walnuts", "Almonds", "Mint leaves", "Honey", "Lemon juice"],
    steps: ["Chop fruits and combine in a bowl", "Add chopped nuts and mint", "Drizzle with honey and lemon juice", "Toss gently and serve chilled"],
    category: "salads",
    prepTime: "15 minutes",
    servings: "2"
  }
];
