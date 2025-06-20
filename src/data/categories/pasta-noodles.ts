
import { Recipe } from '@/types/Recipe';

export const pastaNoodleRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Spaghetti Carbonara",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800",
    ingredients: ["Spaghetti", "Eggs", "Parmesan cheese", "Bacon", "Black pepper", "Garlic"],
    steps: ["Cook spaghetti", "Fry bacon until crispy", "Beat eggs with cheese", "Toss hot pasta with egg mixture", "Serve immediately"],
    category: "pasta-noodles",
    prepTime: "25 minutes",
    servings: "4"
  },
  {
    name: "Hakka Noodles",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    ingredients: ["Noodles", "Mixed vegetables", "Soy sauce", "Garlic", "Ginger", "Spring onions"],
    steps: ["Boil noodles", "Stir-fry vegetables", "Add noodles and sauces", "Toss everything", "Garnish and serve"],
    category: "pasta-noodles",
    prepTime: "20 minutes",
    servings: "3"
  },
  {
    name: "Penne Arrabbiata",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800",
    ingredients: ["Penne pasta", "Tomatoes", "Garlic", "Red chili flakes", "Olive oil", "Basil"],
    steps: ["Cook penne pasta", "Make spicy tomato sauce", "Toss pasta with sauce", "Add fresh basil", "Serve hot"],
    category: "pasta-noodles",
    prepTime: "25 minutes",
    servings: "4"
  },
  {
    name: "Pad Thai",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    ingredients: ["Rice noodles", "Shrimp", "Bean sprouts", "Tamarind paste", "Fish sauce", "Peanuts"],
    steps: ["Soak rice noodles", "Stir-fry shrimp", "Add noodles and sauce", "Toss with bean sprouts", "Garnish with peanuts"],
    category: "pasta-noodles",
    prepTime: "30 minutes",
    servings: "3"
  },
  {
    name: "Mac and Cheese",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Macaroni", "Cheddar cheese", "Milk", "Butter", "Flour", "Breadcrumbs"],
    steps: ["Cook macaroni", "Make cheese sauce", "Combine pasta and sauce", "Top with breadcrumbs", "Bake until golden"],
    category: "pasta-noodles",
    prepTime: "35 minutes",
    servings: "4"
  }
];
