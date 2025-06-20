
import { Recipe } from '@/types/Recipe';

export const chineseRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Hakka Noodles",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    ingredients: ["Noodles", "Mixed vegetables", "Soy sauce", "Vinegar", "Garlic", "Ginger", "Spring onions"],
    steps: ["Boil noodles", "Stir-fry vegetables", "Add noodles and sauces", "Toss everything together", "Garnish with spring onions"],
    category: "chinese",
    prepTime: "25 minutes",
    servings: "3"
  },
  {
    name: "Manchurian",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["Cauliflower", "All purpose flour", "Cornstarch", "Soy sauce", "Chili sauce", "Garlic", "Ginger"],
    steps: ["Make batter and coat cauliflower", "Deep fry until crispy", "Prepare sauce", "Toss fried pieces in sauce", "Serve hot"],
    category: "chinese",
    prepTime: "35 minutes",
    servings: "4"
  }
];
