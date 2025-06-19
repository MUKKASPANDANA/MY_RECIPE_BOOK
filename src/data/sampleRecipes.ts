
import { Recipe } from '@/types/Recipe';

export const sampleRecipes: Omit<Recipe, 'id'>[] = [
  // Biryani - 5 items (existing)
  {
    name: "Chicken Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d117?w=800",
    ingredients: ["2 cups basmati rice", "500g chicken pieces", "2 onions sliced", "1 cup yogurt", "2 tbsp ginger-garlic paste", "Biryani masala", "Saffron", "Mint leaves", "Coriander leaves", "Ghee"],
    steps: ["Soak rice for 30 minutes", "Marinate chicken with yogurt and spices for 1 hour", "Fry onions until golden brown", "Cook marinated chicken until 70% done", "Boil rice with whole spices until 70% cooked", "Layer rice and chicken alternately", "Sprinkle fried onions, mint, and saffron milk", "Cook on dum for 45 minutes"],
    category: "biryani",
    prepTime: "2 hours",
    servings: "4-5"
  },
  {
    name: "Mutton Biryani",
    image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=800",
    ingredients: ["2 cups basmati rice", "500g mutton pieces", "2 onions", "1 cup yogurt", "Garam masala", "Red chili powder", "Turmeric", "Saffron", "Mint leaves", "Ghee"],
    steps: ["Marinate mutton with yogurt and spices for 2 hours", "Cook mutton until tender", "Prepare rice with whole spices", "Layer cooked mutton and rice", "Garnish with fried onions and herbs", "Cook on dum for 1 hour"],
    category: "biryani",
    prepTime: "3 hours",
    servings: "4-5"
  },
  {
    name: "Vegetable Biryani",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["2 cups basmati rice", "Mixed vegetables", "Paneer cubes", "Cashews", "Raisins", "Biryani masala", "Saffron", "Mint leaves", "Ghee", "Onions"],
    steps: ["Soak rice for 30 minutes", "Sauté vegetables with spices", "Cook rice with whole spices until 70% done", "Layer vegetables and rice", "Sprinkle nuts, raisins, and herbs", "Cook on dum for 30 minutes"],
    category: "biryani",
    prepTime: "1.5 hours",
    servings: "4"
  },
  {
    name: "Egg Biryani",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
    ingredients: ["2 cups basmati rice", "6 boiled eggs", "2 onions", "Tomatoes", "Yogurt", "Biryani masala", "Saffron", "Mint leaves", "Coriander leaves", "Ghee"],
    steps: ["Boil and fry eggs until golden", "Prepare masala gravy", "Cook rice with whole spices", "Layer eggs and rice with gravy", "Garnish with herbs and fried onions", "Cook on dum for 35 minutes"],
    category: "biryani",
    prepTime: "1.5 hours",
    servings: "3-4"
  },

  // Fried Rice - 5 items
  {
    name: "Chicken Fried Rice",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    ingredients: ["2 cups cooked rice", "200g chicken breast", "2 eggs", "Mixed vegetables", "Soy sauce", "Garlic", "Ginger", "Spring onions", "Sesame oil", "Salt"],
    steps: ["Cook rice and let it cool", "Cut chicken into small pieces", "Scramble eggs and set aside", "Stir-fry chicken until cooked", "Add vegetables and cook", "Add rice and seasonings", "Mix in eggs and spring onions", "Serve hot"],
    category: "fried-rice",
    prepTime: "25 minutes",
    servings: "3-4"
  },
  {
    name: "Vegetable Fried Rice",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["2 cups cooked rice", "Mixed vegetables", "2 eggs", "Soy sauce", "Garlic", "Ginger", "Spring onions", "Sesame oil", "Salt", "White pepper"],
    steps: ["Heat oil in wok", "Scramble eggs and set aside", "Stir-fry vegetables", "Add garlic and ginger", "Add rice and mix well", "Season with soy sauce", "Add eggs and spring onions", "Serve immediately"],
    category: "fried-rice",
    prepTime: "20 minutes",
    servings: "3-4"
  },
  {
    name: "Prawn Fried Rice",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["2 cups cooked rice", "300g prawns", "2 eggs", "Vegetables", "Soy sauce", "Fish sauce", "Garlic", "Chili", "Spring onions", "Oil"],
    steps: ["Clean and devein prawns", "Heat oil and scramble eggs", "Stir-fry prawns until pink", "Add vegetables and cook", "Add rice and sauces", "Mix everything well", "Garnish with spring onions", "Serve hot"],
    category: "fried-rice",
    prepTime: "25 minutes",
    servings: "3-4"
  },
  {
    name: "Mushroom Fried Rice",
    image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800",
    ingredients: ["2 cups cooked rice", "200g mushrooms", "2 eggs", "Soy sauce", "Garlic", "Ginger", "Spring onions", "Sesame oil", "Salt", "Black pepper"],
    steps: ["Slice mushrooms", "Scramble eggs and set aside", "Stir-fry mushrooms until golden", "Add garlic and ginger", "Add rice and seasonings", "Mix in scrambled eggs", "Garnish with spring onions", "Serve immediately"],
    category: "fried-rice",
    prepTime: "20 minutes",
    servings: "3"
  },
  {
    name: "Thai Pineapple Fried Rice",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800",
    ingredients: ["2 cups jasmine rice", "1 cup pineapple chunks", "200g shrimp", "Cashews", "Raisins", "Fish sauce", "Soy sauce", "Curry powder", "Garlic", "Chili"],
    steps: ["Cook jasmine rice", "Stir-fry shrimp until cooked", "Add garlic and chili", "Add rice and curry powder", "Mix in pineapple chunks", "Add cashews and raisins", "Season with sauces", "Serve in pineapple shell if available"],
    category: "fried-rice",
    prepTime: "30 minutes",
    servings: "4"
  },

  // Pickles - 5 items
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
  },

  // Shakes - 5 items
  {
    name: "Mango Shake",
    image: "https://images.unsplash.com/photo-1548373902-d5b6ad046224?w=800",
    ingredients: ["2 ripe mangoes", "1 cup milk", "2 tbsp sugar", "Ice cubes", "Cardamom powder"],
    steps: ["Peel and chop mangoes", "Blend mangoes with milk and sugar", "Add ice cubes and cardamom", "Blend until smooth", "Serve chilled with garnish"],
    category: "shakes",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Chocolate Shake",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800",
    ingredients: ["2 cups milk", "3 tbsp cocoa powder", "2 tbsp sugar", "Vanilla ice cream", "Chocolate chips", "Whipped cream"],
    steps: ["Heat milk slightly", "Mix cocoa powder and sugar", "Blend with ice cream", "Add chocolate chips", "Top with whipped cream", "Serve immediately"],
    category: "shakes",
    prepTime: "8 minutes",
    servings: "2"
  },
  {
    name: "Banana Shake",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
    ingredients: ["3 ripe bananas", "1.5 cups milk", "2 tbsp honey", "Vanilla extract", "Ice cubes", "Nuts for garnish"],
    steps: ["Peel and slice bananas", "Blend bananas with milk", "Add honey and vanilla", "Blend with ice cubes", "Garnish with nuts", "Serve fresh"],
    category: "shakes",
    prepTime: "5 minutes",
    servings: "2"
  },
  {
    name: "Strawberry Shake",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    ingredients: ["1 cup fresh strawberries", "1 cup milk", "2 tbsp sugar", "Vanilla ice cream", "Ice cubes", "Fresh strawberries for garnish"],
    steps: ["Wash and hull strawberries", "Blend strawberries with milk", "Add sugar and ice cream", "Blend until smooth", "Garnish with fresh strawberries", "Serve chilled"],
    category: "shakes",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Oreo Shake",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800",
    ingredients: ["8 Oreo cookies", "1.5 cups milk", "Vanilla ice cream", "Chocolate syrup", "Whipped cream", "Crushed Oreos for topping"],
    steps: ["Crush 6 Oreo cookies", "Blend with milk and ice cream", "Add chocolate syrup", "Blend until smooth", "Top with whipped cream", "Garnish with crushed Oreos"],
    category: "shakes",
    prepTime: "8 minutes",
    servings: "2"
  },

  // Soups - 5 items
  {
    name: "Tomato Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
    ingredients: ["6 large tomatoes", "1 onion", "2 garlic cloves", "Fresh basil", "Vegetable broth", "Heavy cream", "Salt", "Black pepper", "Olive oil"],
    steps: ["Roast tomatoes and onions", "Sauté garlic in olive oil", "Blend roasted vegetables with broth", "Strain the mixture", "Add cream and seasonings", "Garnish with basil and serve hot"],
    category: "soups",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Chicken Corn Soup",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
    ingredients: ["200g chicken breast", "1 cup sweet corn", "3 cups chicken broth", "2 eggs", "2 tbsp cornstarch", "Soy sauce", "White pepper", "Spring onions", "Ginger"],
    steps: ["Boil and shred chicken", "Heat chicken broth", "Add corn and chicken", "Mix cornstarch with water", "Add to soup while stirring", "Beat eggs and add slowly", "Season and garnish"],
    category: "soups",
    prepTime: "25 minutes",
    servings: "4"
  },
  {
    name: "Vegetable Soup",
    image: "https://images.unsplash.com/photo-1588566565463-180a5b2090d2?w=800",
    ingredients: ["Mixed vegetables", "Vegetable broth", "Onion", "Garlic", "Herbs", "Olive oil", "Salt", "Black pepper", "Bay leaves"],
    steps: ["Chop all vegetables", "Sauté onions and garlic", "Add vegetables and broth", "Simmer with herbs", "Season to taste", "Serve hot with bread"],
    category: "soups",
    prepTime: "35 minutes",
    servings: "4"
  },
  {
    name: "Mushroom Soup",
    image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800",
    ingredients: ["500g mushrooms", "2 onions", "3 garlic cloves", "Vegetable broth", "Heavy cream", "Thyme", "Bay leaves", "Butter", "Salt", "White pepper"],
    steps: ["Slice mushrooms and onions", "Sauté in butter until golden", "Add garlic and herbs", "Pour in broth and simmer", "Blend partially for texture", "Add cream and season"],
    category: "soups",
    prepTime: "40 minutes",
    servings: "4"
  },
  {
    name: "Hot and Sour Soup",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
    ingredients: ["200g tofu", "Mushrooms", "Bamboo shoots", "Chicken broth", "Soy sauce", "Vinegar", "Chili sauce", "Cornstarch", "Egg", "Spring onions"],
    steps: ["Slice tofu and vegetables", "Heat chicken broth", "Add vegetables and tofu", "Mix sauces and add to soup", "Thicken with cornstarch", "Add beaten egg slowly", "Garnish and serve"],
    category: "soups",
    prepTime: "20 minutes",
    servings: "3-4"
  },

  // Salads - 5 items
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
  },

  // Detox Water - 5 items
  {
    name: "Lemon Mint Detox Water",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    ingredients: ["1 lemon sliced", "Fresh mint leaves", "1 liter water", "Ice cubes", "Honey (optional)"],
    steps: ["Wash lemon and mint thoroughly", "Slice lemon into rounds", "Add lemon slices to water", "Add fresh mint leaves", "Let infuse for 2-3 hours", "Serve chilled with ice"],
    category: "detox-water",
    prepTime: "5 minutes + 2 hours infusion",
    servings: "4"
  },
  {
    name: "Cucumber Lime Detox Water",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
    ingredients: ["1 cucumber sliced", "2 limes sliced", "1 liter water", "Ice cubes", "Fresh basil leaves"],
    steps: ["Wash cucumber and limes", "Slice cucumber and limes", "Add to water with basil", "Let infuse for 3-4 hours", "Strain if desired", "Serve over ice"],
    category: "detox-water",
    prepTime: "5 minutes + 3 hours infusion",
    servings: "4"
  },
  {
    name: "Ginger Lemon Detox Water",
    image: "https://images.unsplash.com/photo-1556881286-7c2c137feb93?w=800",
    ingredients: ["2 inch ginger piece", "1 lemon", "1 liter water", "Honey", "Ice cubes"],
    steps: ["Slice ginger thinly", "Slice lemon into rounds", "Add to water and let infuse", "Add honey to taste", "Serve chilled", "Can be consumed warm too"],
    category: "detox-water",
    prepTime: "5 minutes + 1 hour infusion",
    servings: "4"
  },
  {
    name: "Berry Mint Detox Water",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    ingredients: ["Mixed berries", "Fresh mint leaves", "1 liter water", "Ice cubes", "Lemon slices"],
    steps: ["Wash berries and mint", "Muddle berries slightly", "Add berries and mint to water", "Add lemon slices", "Infuse for 2-3 hours", "Serve with ice"],
    category: "detox-water",
    prepTime: "5 minutes + 2 hours infusion",
    servings: "4"
  },
  {
    name: "Apple Cinnamon Detox Water",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800",
    ingredients: ["2 apples sliced", "2 cinnamon sticks", "1 liter water", "Ice cubes", "Star anise (optional)"],
    steps: ["Slice apples thinly", "Add apples and cinnamon to water", "Let infuse for 4-6 hours", "Add star anise if desired", "Serve chilled", "Refill water 2-3 times"],
    category: "detox-water",
    prepTime: "5 minutes + 4 hours infusion",
    servings: "4"
  }
];
