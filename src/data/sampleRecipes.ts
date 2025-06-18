
import { Recipe } from '@/types/Recipe';

export const sampleRecipes: Omit<Recipe, 'id'>[] = [
  // Biryani Recipes
  {
    name: "Chicken Biryani",
    category: "biryani",
    ingredients: ["Basmati rice", "Chicken", "Onions", "Yogurt", "Spices", "Saffron"],
    steps: ["Marinate chicken", "Cook rice", "Layer and cook", "Serve hot"],
    prepTime: "2 hours",
    servings: "4-6 people"
  },
  {
    name: "Mutton Biryani",
    category: "biryani",
    ingredients: ["Basmati rice", "Mutton", "Onions", "Yogurt", "Garam masala", "Mint"],
    steps: ["Cook mutton", "Prepare rice", "Layer biryani", "Dum cook"],
    prepTime: "3 hours",
    servings: "6-8 people"
  },
  {
    name: "Vegetable Biryani",
    category: "biryani",
    ingredients: ["Basmati rice", "Mixed vegetables", "Paneer", "Spices", "Cashews"],
    steps: ["Cook vegetables", "Prepare rice", "Layer", "Cook on dum"],
    prepTime: "1.5 hours",
    servings: "4-5 people"
  },
  {
    name: "Fish Biryani",
    category: "biryani",
    ingredients: ["Basmati rice", "Fish fillets", "Coconut milk", "Curry leaves", "Spices"],
    steps: ["Marinate fish", "Cook rice", "Layer with fish", "Steam cook"],
    prepTime: "2 hours",
    servings: "4 people"
  },
  {
    name: "Egg Biryani",
    category: "biryani",
    ingredients: ["Basmati rice", "Boiled eggs", "Onions", "Tomatoes", "Biryani spices"],
    steps: ["Boil eggs", "Cook rice", "Prepare masala", "Layer and cook"],
    prepTime: "1 hour",
    servings: "3-4 people"
  },
  {
    name: "Prawn Biryani",
    category: "biryani",
    ingredients: ["Basmati rice", "Prawns", "Coconut", "Red chilies", "Tamarind"],
    steps: ["Clean prawns", "Cook rice", "Make prawn curry", "Layer biryani"],
    prepTime: "1.5 hours",
    servings: "4 people"
  },
  {
    name: "Hyderabadi Biryani",
    category: "biryani",
    ingredients: ["Basmati rice", "Goat meat", "Yogurt", "Fried onions", "Kewra water"],
    steps: ["Marinate meat", "Par-cook rice", "Layer in pot", "Seal and cook"],
    prepTime: "4 hours",
    servings: "8-10 people"
  },
  {
    name: "Kolkata Biryani",
    category: "biryani",
    ingredients: ["Basmati rice", "Mutton", "Potatoes", "Rose water", "Eggs"],
    steps: ["Cook mutton with potatoes", "Prepare rice", "Layer with eggs", "Cook"],
    prepTime: "3 hours",
    servings: "6 people"
  },
  {
    name: "Lucknowi Biryani",
    category: "biryani",
    ingredients: ["Basmati rice", "Lamb", "Saffron", "Ghee", "Whole spices"],
    steps: ["Cook lamb in dum style", "Cook rice separately", "Layer gently", "Steam"],
    prepTime: "3.5 hours",
    servings: "6-8 people"
  },
  {
    name: "Sindhi Biryani",
    category: "biryani",
    ingredients: ["Basmati rice", "Beef/Chicken", "Potatoes", "Plums", "Yogurt"],
    steps: ["Cook meat", "Prepare rice", "Add tangy elements", "Layer and cook"],
    prepTime: "2.5 hours",
    servings: "6 people"
  },

  // Fried Rice Recipes
  {
    name: "Chicken Fried Rice",
    category: "fried-rice",
    ingredients: ["Cooked rice", "Chicken pieces", "Eggs", "Vegetables", "Soy sauce"],
    steps: ["Cook chicken", "Scramble eggs", "Stir fry rice", "Mix everything"],
    prepTime: "30 minutes",
    servings: "3-4 people"
  },
  {
    name: "Vegetable Fried Rice",
    category: "fried-rice",
    ingredients: ["Cooked rice", "Mixed vegetables", "Garlic", "Ginger", "Soy sauce"],
    steps: ["Stir fry vegetables", "Add rice", "Season", "Toss well"],
    prepTime: "20 minutes",
    servings: "2-3 people"
  },
  {
    name: "Egg Fried Rice",
    category: "fried-rice",
    ingredients: ["Cooked rice", "Eggs", "Spring onions", "Garlic", "Oil"],
    steps: ["Scramble eggs", "Stir fry rice", "Add seasonings", "Garnish"],
    prepTime: "15 minutes",
    servings: "2 people"
  },
  {
    name: "Shrimp Fried Rice",
    category: "fried-rice",
    ingredients: ["Cooked rice", "Shrimp", "Peas", "Carrots", "Sesame oil"],
    steps: ["Cook shrimp", "Stir fry vegetables", "Add rice", "Season"],
    prepTime: "25 minutes",
    servings: "3 people"
  },
  {
    name: "Thai Fried Rice",
    category: "fried-rice",
    ingredients: ["Jasmine rice", "Fish sauce", "Thai basil", "Chilies", "Lime"],
    steps: ["Heat wok", "Stir fry rice", "Add Thai seasonings", "Garnish with basil"],
    prepTime: "20 minutes",
    servings: "2-3 people"
  },
  {
    name: "Indonesian Fried Rice",
    category: "fried-rice",
    ingredients: ["Rice", "Sweet soy sauce", "Chili paste", "Vegetables", "Egg"],
    steps: ["Prepare paste", "Stir fry rice", "Add sauce", "Top with fried egg"],
    prepTime: "25 minutes",
    servings: "2-3 people"
  },
  {
    name: "Kimchi Fried Rice",
    category: "fried-rice",
    ingredients: ["Rice", "Kimchi", "Pork belly", "Sesame oil", "Nori"],
    steps: ["Cook pork", "Add kimchi", "Stir in rice", "Garnish with nori"],
    prepTime: "20 minutes",
    servings: "2 people"
  },
  {
    name: "Pineapple Fried Rice",
    category: "fried-rice",
    ingredients: ["Rice", "Pineapple chunks", "Cashews", "Curry powder", "Raisins"],
    steps: ["Stir fry rice", "Add pineapple", "Season with curry", "Add nuts"],
    prepTime: "25 minutes",
    servings: "3-4 people"
  },
  {
    name: "Mushroom Fried Rice",
    category: "fried-rice",
    ingredients: ["Rice", "Mixed mushrooms", "Soy sauce", "Garlic", "Herbs"],
    steps: ["Sauté mushrooms", "Add rice", "Season well", "Garnish with herbs"],
    prepTime: "20 minutes",
    servings: "2-3 people"
  },
  {
    name: "Beef Fried Rice",
    category: "fried-rice",
    ingredients: ["Rice", "Beef strips", "Bell peppers", "Onions", "Oyster sauce"],
    steps: ["Cook beef", "Stir fry vegetables", "Add rice", "Sauce and serve"],
    prepTime: "30 minutes",
    servings: "3-4 people"
  },

  // Pickles Recipes
  {
    name: "Mango Pickle",
    category: "pickles",
    ingredients: ["Raw mangoes", "Mustard oil", "Red chili powder", "Turmeric", "Salt"],
    steps: ["Cut mangoes", "Mix with spices", "Add oil", "Store in jar"],
    prepTime: "30 minutes",
    servings: "Makes 1 jar"
  },
  {
    name: "Lemon Pickle",
    category: "pickles",
    ingredients: ["Lemons", "Salt", "Turmeric", "Red chilies", "Mustard seeds"],
    steps: ["Cut lemons", "Mix with salt", "Add spices", "Sun dry"],
    prepTime: "20 minutes",
    servings: "Makes 1 jar"
  },
  {
    name: "Garlic Pickle",
    category: "pickles",
    ingredients: ["Garlic cloves", "Mustard oil", "Fenugreek powder", "Red chilies"],
    steps: ["Peel garlic", "Mix spices", "Add oil", "Store properly"],
    prepTime: "25 minutes",
    servings: "Makes 1 jar"
  },
  {
    name: "Mixed Vegetable Pickle",
    category: "pickles",
    ingredients: ["Cauliflower", "Carrots", "Turnips", "Oil", "Pickle spice mix"],
    steps: ["Cut vegetables", "Blanch lightly", "Mix with spices", "Store"],
    prepTime: "45 minutes",
    servings: "Makes 2 jars"
  },
  {
    name: "Chili Pickle",
    category: "pickles",
    ingredients: ["Green chilies", "Mustard seeds", "Oil", "Salt", "Vinegar"],
    steps: ["Slit chilies", "Temper mustard seeds", "Mix everything", "Store"],
    prepTime: "15 minutes",
    servings: "Makes 1 jar"
  },
  {
    name: "Ginger Pickle",
    category: "pickles",
    ingredients: ["Fresh ginger", "Lemon juice", "Salt", "Turmeric", "Oil"],
    steps: ["Slice ginger", "Add lemon juice", "Mix spices", "Marinate"],
    prepTime: "20 minutes",
    servings: "Makes 1 jar"
  },
  {
    name: "Onion Pickle",
    category: "pickles",
    ingredients: ["Small onions", "Tamarind", "Jaggery", "Red chilies", "Oil"],
    steps: ["Peel onions", "Make tamarind paste", "Cook with spices", "Cool and store"],
    prepTime: "40 minutes",
    servings: "Makes 1 jar"
  },
  {
    name: "Carrot Pickle",
    category: "pickles",
    ingredients: ["Carrots", "Mustard powder", "Turmeric", "Salt", "Oil"],
    steps: ["Cut carrots", "Mix with spices", "Add oil", "Marinate well"],
    prepTime: "25 minutes",
    servings: "Makes 1 jar"
  },
  {
    name: "Amla Pickle",
    category: "pickles",
    ingredients: ["Fresh amla", "Salt", "Turmeric", "Chili powder", "Oil"],
    steps: ["Grate amla", "Mix with salt", "Add spices", "Store in oil"],
    prepTime: "30 minutes",
    servings: "Makes 1 jar"
  },
  {
    name: "Cauliflower Pickle",
    category: "pickles",
    ingredients: ["Cauliflower", "Vinegar", "Mustard seeds", "Turmeric", "Salt"],
    steps: ["Cut cauliflower", "Blanch briefly", "Mix with spices", "Add vinegar"],
    prepTime: "35 minutes",
    servings: "Makes 1 jar"
  },

  // Continue with other categories... (Due to length, I'll add a few more key categories)
  
  // Shakes
  {
    name: "Mango Shake",
    category: "shakes",
    ingredients: ["Ripe mangoes", "Milk", "Sugar", "Ice cubes", "Cardamom"],
    steps: ["Peel mangoes", "Blend with milk", "Add sugar", "Serve chilled"],
    prepTime: "10 minutes",
    servings: "2 glasses"
  },
  {
    name: "Chocolate Shake",
    category: "shakes",
    ingredients: ["Chocolate syrup", "Milk", "Ice cream", "Whipped cream"],
    steps: ["Blend chocolate with milk", "Add ice cream", "Top with cream", "Serve"],
    prepTime: "5 minutes",
    servings: "2 glasses"
  },
  {
    name: "Banana Shake",
    category: "shakes",
    ingredients: ["Bananas", "Milk", "Honey", "Nuts", "Ice"],
    steps: ["Blend bananas", "Add milk and honey", "Add ice", "Garnish with nuts"],
    prepTime: "5 minutes",
    servings: "2 glasses"
  },
  {
    name: "Strawberry Shake",
    category: "shakes",
    ingredients: ["Fresh strawberries", "Milk", "Sugar", "Vanilla", "Ice"],
    steps: ["Blend strawberries", "Add milk and sugar", "Add vanilla", "Serve cold"],
    prepTime: "8 minutes",
    servings: "2 glasses"
  },
  {
    name: "Oreo Shake",
    category: "shakes",
    ingredients: ["Oreo cookies", "Milk", "Vanilla ice cream", "Whipped cream"],
    steps: ["Crush oreos", "Blend with milk", "Add ice cream", "Top with cream"],
    prepTime: "7 minutes",
    servings: "2 glasses"
  },
  {
    name: "Peanut Butter Shake",
    category: "shakes",
    ingredients: ["Peanut butter", "Milk", "Banana", "Honey", "Ice"],
    steps: ["Blend all ingredients", "Adjust consistency", "Serve immediately"],
    prepTime: "5 minutes",
    servings: "2 glasses"
  },
  {
    name: "Coffee Shake",
    category: "shakes",
    ingredients: ["Cold coffee", "Milk", "Ice cream", "Sugar", "Whipped cream"],
    steps: ["Brew strong coffee", "Cool completely", "Blend with ingredients", "Serve"],
    prepTime: "10 minutes",
    servings: "2 glasses"
  },
  {
    name: "Vanilla Shake",
    category: "shakes",
    ingredients: ["Vanilla ice cream", "Milk", "Vanilla extract", "Sugar"],
    steps: ["Blend ice cream with milk", "Add vanilla", "Adjust sweetness", "Serve"],
    prepTime: "3 minutes",
    servings: "2 glasses"
  },
  {
    name: "Avocado Shake",
    category: "shakes",
    ingredients: ["Ripe avocado", "Milk", "Honey", "Lime juice", "Ice"],
    steps: ["Blend avocado", "Add milk and honey", "Add lime", "Serve fresh"],
    prepTime: "8 minutes",
    servings: "2 glasses"
  },
  {
    name: "Rose Shake",
    category: "shakes",
    ingredients: ["Rose syrup", "Milk", "Ice cream", "Rose petals", "Nuts"],
    steps: ["Mix rose syrup with milk", "Add ice cream", "Garnish beautifully"],
    prepTime: "5 minutes",
    servings: "2 glasses"
  },

  // Quick Easy Recipes
  {
    name: "2-Minute Maggi",
    category: "quick-easy",
    ingredients: ["Maggi noodles", "Water", "Masala packet", "Vegetables"],
    steps: ["Boil water", "Add noodles", "Add masala", "Cook and serve"],
    prepTime: "5 minutes",
    servings: "1 person"
  },
  {
    name: "Bread Omelet",
    category: "quick-easy",
    ingredients: ["Bread", "Eggs", "Onions", "Tomatoes", "Salt"],
    steps: ["Beat eggs", "Add vegetables", "Cook with bread", "Serve hot"],
    prepTime: "10 minutes",
    servings: "2 people"
  },
  {
    name: "Instant Poha",
    category: "quick-easy",
    ingredients: ["Poha", "Onions", "Peanuts", "Curry leaves", "Turmeric"],
    steps: ["Wash poha", "Temper spices", "Mix everything", "Garnish and serve"],
    prepTime: "15 minutes",
    servings: "2-3 people"
  },
  {
    name: "Quick Pasta",
    category: "quick-easy",
    ingredients: ["Pasta", "Olive oil", "Garlic", "Herbs", "Cheese"],
    steps: ["Cook pasta", "Sauté garlic", "Toss together", "Add cheese"],
    prepTime: "15 minutes",
    servings: "2 people"
  },
  {
    name: "Microwave Mug Cake",
    category: "quick-easy",
    ingredients: ["Flour", "Sugar", "Cocoa", "Oil", "Water"],
    steps: ["Mix dry ingredients", "Add wet ingredients", "Microwave 2 minutes", "Enjoy"],
    prepTime: "5 minutes",
    servings: "1 person"
  },
  {
    name: "Instant Sandwich",
    category: "quick-easy",
    ingredients: ["Bread", "Cheese", "Vegetables", "Butter", "Chutney"],
    steps: ["Layer ingredients", "Grill or toast", "Cut and serve", "Enjoy hot"],
    prepTime: "10 minutes",
    servings: "2 people"
  },
  {
    name: "Quick Smoothie Bowl",
    category: "quick-easy",
    ingredients: ["Frozen fruits", "Yogurt", "Granola", "Nuts", "Honey"],
    steps: ["Blend frozen fruits", "Pour in bowl", "Add toppings", "Serve immediately"],
    prepTime: "5 minutes",
    servings: "1 person"
  },
  {
    name: "5-Minute Upma",
    category: "quick-easy",
    ingredients: ["Semolina", "Water", "Mustard seeds", "Curry leaves", "Salt"],
    steps: ["Roast semolina", "Temper spices", "Add water", "Cook until done"],
    prepTime: "8 minutes",
    servings: "2 people"
  },
  {
    name: "Instant Oats",
    category: "quick-easy",
    ingredients: ["Oats", "Milk", "Fruits", "Nuts", "Honey"],
    steps: ["Cook oats with milk", "Add fruits", "Top with nuts", "Drizzle honey"],
    prepTime: "5 minutes",
    servings: "1 person"
  },
  {
    name: "Quick Fried Rice",
    category: "quick-easy",
    ingredients: ["Leftover rice", "Soy sauce", "Vegetables", "Egg", "Oil"],
    steps: ["Heat oil", "Scramble egg", "Add rice and vegetables", "Season and serve"],
    prepTime: "10 minutes",
    servings: "2 people"
  }
];
