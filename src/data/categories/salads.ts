
import { Recipe } from '@/types/Recipe';

export const saladRecipes: Omit<Recipe, 'id'>[] = [
  {
    name: "Caesar Salad",
    image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=800",
    ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing", "Anchovy fillets", "Garlic", "Lemon juice", "Olive oil", "Black pepper"],
    steps: ["Wash and chop lettuce", "Prepare Caesar dressing", "Toss lettuce with dressing", "Add croutons and cheese", "Garnish with anchovies", "Serve immediately"],
    category: "salads",
    prepTime: "15 minutes",
    servings: "2-3"
  },
  {
    name: "Greek Salad",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800",
    ingredients: ["Cucumber", "Tomatoes", "Red onion", "Feta cheese", "Olives", "Olive oil", "Lemon juice", "Oregano", "Salt", "Black pepper"],
    steps: ["Chop all vegetables", "Crumble feta cheese", "Mix vegetables and cheese", "Prepare dressing with oil and lemon", "Toss salad with dressing", "Top with olives and oregano"],
    category: "salads",
    prepTime: "10 minutes",
    servings: "2-3"
  },
  {
    name: "Garden Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    ingredients: ["Mixed greens", "Cherry tomatoes", "Cucumber", "Carrots", "Bell peppers", "Red onion", "Olive oil", "Balsamic vinegar", "Salt", "Herbs"],
    steps: ["Wash and prepare all vegetables", "Slice vegetables uniformly", "Mix all vegetables in a bowl", "Prepare vinaigrette", "Toss salad with dressing", "Serve fresh"],
    category: "salads",
    prepTime: "12 minutes",
    servings: "3-4"
  },
  {
    name: "Fruit Salad",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800",
    ingredients: ["Apple", "Orange", "Grapes", "Strawberries", "Kiwi", "Pineapple", "Honey", "Lemon juice", "Mint leaves", "Chaat masala"],
    steps: ["Wash and chop all fruits", "Mix fruits in a large bowl", "Drizzle with honey and lemon", "Add chaat masala", "Garnish with mint", "Chill before serving"],
    category: "salads",
    prepTime: "15 minutes",
    servings: "4"
  },
  {
    name: "Quinoa Salad",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800",
    ingredients: ["1 cup quinoa", "Cherry tomatoes", "Cucumber", "Red bell pepper", "Red onion", "Parsley", "Lemon juice", "Olive oil", "Salt", "Black pepper"],
    steps: ["Cook quinoa and let cool", "Chop all vegetables", "Mix quinoa with vegetables", "Prepare lemon vinaigrette", "Toss salad with dressing", "Let flavors meld before serving"],
    category: "salads",
    prepTime: "25 minutes",
    servings: "3-4"
  }
];
