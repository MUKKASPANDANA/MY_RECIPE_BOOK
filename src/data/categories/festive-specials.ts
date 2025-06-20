
import { Recipe } from '@/types/Recipe';

export const festiveSpecialRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Gujiya",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
    ingredients: ["All purpose flour", "Khoya", "Sugar", "Coconut", "Nuts", "Cardamom", "Ghee"],
    steps: ["Make dough", "Prepare sweet filling", "Fill and shape crescents", "Deep fry until golden", "Serve during festivals"],
    category: "festive-specials",
    prepTime: "1 hour",
    servings: "8"
  },
  {
    name: "Modak",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    ingredients: ["Rice flour", "Jaggery", "Coconut", "Cardamom", "Ghee"],
    steps: ["Make rice flour dough", "Prepare coconut-jaggery filling", "Shape into dumplings", "Steam until cooked", "Offer to deities"],
    category: "festive-specials",
    prepTime: "45 minutes",
    servings: "6"
  }
];
