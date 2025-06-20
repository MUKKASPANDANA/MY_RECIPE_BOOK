
import { Recipe } from '@/types/Recipe';

export const partyStarterRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Chicken Wings",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d117?w=800",
    ingredients: ["Chicken wings", "Hot sauce", "Butter", "Garlic powder", "Salt", "Pepper"],
    steps: ["Season wings", "Bake until crispy", "Toss in sauce", "Serve with celery", "Enjoy hot"],
    category: "party-starters",
    prepTime: "45 minutes",
    servings: "6"
  },
  {
    name: "Cheese Balls",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Cream cheese", "Shredded cheese", "Breadcrumbs", "Herbs", "Oil for frying"],
    steps: ["Mix cheeses and herbs", "Form into balls", "Coat with breadcrumbs", "Deep fry until golden", "Serve hot"],
    category: "party-starters",
    prepTime: "30 minutes",
    servings: "8"
  }
];
