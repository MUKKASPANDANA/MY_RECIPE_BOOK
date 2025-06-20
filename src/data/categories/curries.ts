import { Recipe } from '@/types/Recipe';

export const curryRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Paneer Butter Masala",
    image: "https://images.unsplash.com/photo-1604908812432-56c1e9c52637?w=800",
    ingredients: ["200g paneer cubes", "2 tomatoes", "1 onion", "2 tbsp cream", "1 tsp garam masala", "Butter", "Ginger-garlic paste", "Salt", "Kasuri methi"],
    steps: ["Sauté onions and tomatoes, blend to a paste", "Cook the paste with spices", "Add cream and butter", "Add paneer cubes and simmer for 10 minutes", "Garnish with kasuri methi"],
    category: "curries",
    prepTime: "40 minutes",
    servings: "3-4"
  },
  {
    name: "Aloo Gobi Curry",
    image: "https://images.unsplash.com/photo-1670773078264-c58fe5d7cb80?w=800",
    ingredients: ["2 potatoes", "1 small cauliflower", "1 onion", "2 tomatoes", "1 tsp turmeric", "1 tsp cumin", "Coriander powder", "Salt", "Oil"],
    steps: ["Boil potatoes and cauliflower until 70% cooked", "Sauté onions and tomatoes", "Add spices and mix well", "Add veggies and cook until tender", "Garnish with coriander leaves"],
    category: "curries",
    prepTime: "35 minutes",
    servings: "4"
  },
  {
    name: "Chana Masala",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800",
    ingredients: ["1 cup boiled chickpeas", "2 tomatoes", "1 onion", "1 tsp chana masala", "1 tsp cumin", "Ginger-garlic paste", "Salt", "Coriander leaves"],
    steps: ["Sauté onions, garlic, and tomatoes", "Add spices and cook until aromatic", "Add boiled chickpeas and simmer for 15 minutes", "Garnish with coriander"],
    category: "curries",
    prepTime: "45 minutes",
    servings: "3"
  },
  {
    name: "Mixed Vegetable Curry",
    image: "https://images.unsplash.com/photo-1601841162542-43e61d57f942?w=800",
    ingredients: ["Mixed vegetables", "Onion", "Tomato", "Garam masala", "Cream or coconut milk", "Ginger-garlic paste", "Salt", "Oil"],
    steps: ["Chop and parboil vegetables", "Make onion-tomato masala", "Add vegetables and cook with spices", "Add cream or coconut milk", "Simmer until thick and creamy"],
    category: "curries",
    prepTime: "40 minutes",
    servings: "4"
  }
];
