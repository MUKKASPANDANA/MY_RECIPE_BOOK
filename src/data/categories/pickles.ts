
import { Recipe } from '@/types/Recipe';

export const pickleRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Mango Pickle",
    image: "https://images.unsplash.com/photo-1548373902-d5b6ad046224?w=800",
    ingredients: ["2kg raw mangoes", "200g mustard seeds", "100g fenugreek seeds", "Red chili powder", "Turmeric", "Asafoetida", "Salt", "Mustard oil", "Garlic", "Ginger"],
    steps: ["Cut mangoes into pieces", "Sun dry for 2 days", "Grind mustard and fenugreek seeds", "Mix spices with mango pieces", "Heat mustard oil and cool", "Add oil to pickle", "Mix well and store", "Let mature for 1 week"],
    category: "pickles",
    prepTime: "3 days",
    servings: "50"
  },
  {
    name: "Lemon Pickle",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
    ingredients: ["1kg lemons", "100g salt", "Red chili powder", "Turmeric", "Mustard seeds", "Fenugreek seeds", "Asafoetida", "Mustard oil", "Curry leaves"],
    steps: ["Wash and dry lemons", "Cut into quarters", "Mix with salt and spices", "Let sit for 2 days", "Heat oil with mustard seeds", "Add curry leaves", "Mix with lemon mixture", "Store in airtight jar"],
    category: "pickles",
    prepTime: "2 days",
    servings: "30"
  },
  {
    name: "Garlic Pickle",
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=800",
    ingredients: ["500g garlic cloves", "Red chili powder", "Turmeric", "Salt", "Mustard seeds", "Fenugreek powder", "Sesame oil", "Tamarind", "Jaggery"],
    steps: ["Peel garlic cloves", "Dry roast and grind spices", "Mix garlic with spices", "Heat sesame oil", "Add mustard seeds", "Pour over garlic mixture", "Add tamarind and jaggery", "Store for 3 days before use"],
    category: "pickles",
    prepTime: "45 minutes + 3 days maturation",
    servings: "25"
  },
  {
    name: "Mixed Vegetable Pickle",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    ingredients: ["Carrots", "Cauliflower", "Green beans", "Turnip", "Salt", "Red chili powder", "Turmeric", "Mustard seeds", "Fenugreek seeds", "Mustard oil"],
    steps: ["Cut vegetables into pieces", "Mix with salt and dry", "Grind mustard and fenugreek", "Mix vegetables with spices", "Heat mustard oil", "Cool and add to vegetables", "Mix well and store", "Ready in 2 days"],
    category: "pickles",
    prepTime: "1 hour + 2 days",
    servings: "40"
  },
  {
    name: "Green Chili Pickle",
    image: "https://images.unsplash.com/photo-1583663585515-78101dadd966?w=800",
    ingredients: ["500g green chilies", "Mustard seeds", "Fenugreek seeds", "Turmeric", "Salt", "Lemon juice", "Mustard oil", "Garlic", "Ginger"],
    steps: ["Wash and dry chilies", "Make slits in chilies", "Grind mustard and fenugreek", "Mix chilies with spices", "Heat oil and cool", "Add lemon juice", "Mix everything well", "Store in glass jar"],
    category: "pickles",
    prepTime: "30 minutes",
    servings: "20"
  }
];
