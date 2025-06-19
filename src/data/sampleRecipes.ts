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

  // Shakes - 5 items (existing)
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

  // Soups - 5 items (existing)
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

  // Salads - 5 items (existing)
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

  // Detox Water - 5 items (existing)
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
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800",
    ingredients: ["1 cucumber sliced", "2 limes sliced", "1 liter water", "Ice cubes", "Fresh basil leaves"],
    steps: ["Wash cucumber and limes", "Slice cucumber and limes", "Add to water with basil", "Refrigerate for 3-4 hours", "Strain if desired", "Serve over ice"],
    category: "detox-water",
    prepTime: "10 minutes + 3 hours infusion",
    servings: "4"
  },
  {
    name: "Ginger Turmeric Detox Water",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800",
    ingredients: ["1 inch fresh ginger", "1 tsp turmeric powder", "1 lemon juiced", "1 liter warm water", "Honey to taste", "Black pepper pinch"],
    steps: ["Grate fresh ginger", "Mix turmeric with warm water", "Add grated ginger", "Add lemon juice and honey", "Stir in black pepper", "Let cool and refrigerate"],
    category: "detox-water",
    prepTime: "8 minutes",
    servings: "3-4"
  },
  {
    name: "Apple Cinnamon Detox Water",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800",
    ingredients: ["2 apples sliced", "2 cinnamon sticks", "1 liter water", "Ice cubes", "Star anise (optional)"],
    steps: ["Wash and slice apples", "Add apple slices to water", "Add cinnamon sticks", "Optional: add star anise", "Refrigerate overnight", "Serve chilled"],
    category: "detox-water",
    prepTime: "5 minutes + overnight infusion",
    servings: "4"
  },
  {
    name: "Berry Mint Detox Water",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    ingredients: ["Mixed berries (strawberries, blueberries)", "Fresh mint leaves", "1 liter water", "Ice cubes", "Lemon slices"],
    steps: ["Wash berries and mint", "Muddle berries gently", "Add to water with mint", "Add lemon slices", "Refrigerate for 2-4 hours", "Serve with fresh ice"],
    category: "detox-water",
    prepTime: "10 minutes + 2 hours infusion",
    servings: "4"
  },

  // Curries - 5 items
  {
    name: "Paneer Butter Masala",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800",
    ingredients: ["400g paneer", "2 onions", "4 tomatoes", "Cashews", "Heavy cream", "Butter", "Garam masala", "Red chili powder", "Turmeric", "Ginger-garlic paste"],
    steps: ["Cut paneer into cubes", "Make cashew-tomato paste", "Sauté onions until golden", "Add ginger-garlic paste", "Add tomato paste and spices", "Add paneer and cream", "Simmer for 10 minutes", "Garnish with butter"],
    category: "curries",
    prepTime: "35 minutes",
    servings: "4"
  },
  {
    name: "Dal Tadka",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800",
    ingredients: ["1 cup yellow dal", "Onion", "Tomatoes", "Green chilies", "Ginger", "Turmeric", "Cumin seeds", "Mustard seeds", "Curry leaves", "Ghee"],
    steps: ["Wash and cook dal with turmeric", "Heat ghee for tadka", "Add cumin and mustard seeds", "Add curry leaves and green chilies", "Add onions and cook", "Add tomatoes and spices", "Pour over cooked dal", "Simmer and serve"],
    category: "curries",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Aloo Sabzi",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800",
    ingredients: ["4 large potatoes", "2 onions", "Tomatoes", "Cumin seeds", "Turmeric", "Coriander powder", "Red chili powder", "Garam masala", "Oil", "Coriander leaves"],
    steps: ["Cut potatoes into cubes", "Heat oil and add cumin seeds", "Add potatoes and fry lightly", "Add onions and cook", "Add tomatoes and spices", "Cover and cook until tender", "Garnish with coriander", "Serve hot"],
    category: "curries",
    prepTime: "25 minutes",
    servings: "4"
  },
  {
    name: "Palak Paneer",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800",
    ingredients: ["250g paneer", "500g spinach", "2 tomatoes", "Onion", "Ginger-garlic paste", "Green chilies", "Cream", "Cumin seeds", "Garam masala", "Oil"],
    steps: ["Blanch spinach and make puree", "Cut paneer into cubes", "Heat oil and add cumin seeds", "Add onions and ginger-garlic paste", "Add tomatoes and cook", "Add spinach puree and spices", "Add paneer and cream", "Simmer for 5 minutes"],
    category: "curries",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Mixed Vegetable Curry",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["Mixed vegetables", "Onions", "Tomatoes", "Coconut milk", "Curry leaves", "Mustard seeds", "Turmeric", "Coriander powder", "Garam masala", "Oil"],
    steps: ["Cut vegetables into pieces", "Heat oil and add mustard seeds", "Add curry leaves and onions", "Add tomatoes and spices", "Add vegetables and cook", "Pour coconut milk", "Simmer until vegetables are tender", "Serve with rice"],
    category: "curries",
    prepTime: "35 minutes",
    servings: "4-5"
  },

  // Non-Veg Curries - 5 items
  {
    name: "Chicken Curry",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
    ingredients: ["500g chicken", "2 onions", "4 tomatoes", "Ginger-garlic paste", "Yogurt", "Red chili powder", "Turmeric", "Garam masala", "Coriander powder", "Oil"],
    steps: ["Cut chicken into pieces", "Marinate with yogurt and spices", "Heat oil and fry onions", "Add ginger-garlic paste", "Add marinated chicken", "Cook until chicken changes color", "Add tomatoes and remaining spices", "Simmer until chicken is cooked", "Garnish and serve"],
    category: "non-veg-curries",
    prepTime: "45 minutes",
    servings: "4-5"
  },
  {
    name: "Mutton Curry",
    image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=800",
    ingredients: ["500g mutton", "2 onions", "Tomatoes", "Yogurt", "Ginger-garlic paste", "Red chili powder", "Turmeric", "Garam masala", "Bay leaves", "Ghee"],
    steps: ["Cut mutton into pieces", "Heat ghee and fry onions", "Add bay leaves and whole spices", "Add mutton and brown", "Add ginger-garlic paste", "Add yogurt and tomatoes", "Add spices and water", "Cook until mutton is tender", "Serve hot"],
    category: "non-veg-curries",
    prepTime: "1.5 hours",
    servings: "4-5"
  },
  {
    name: "Fish Curry",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    ingredients: ["500g fish fillets", "Coconut milk", "Curry leaves", "Mustard seeds", "Onions", "Tomatoes", "Tamarind", "Turmeric", "Red chili powder", "Coriander powder"],
    steps: ["Cut fish into pieces", "Marinate with turmeric and salt", "Heat oil and add mustard seeds", "Add curry leaves and onions", "Add tomatoes and spices", "Add tamarind water", "Add coconut milk", "Gently add fish pieces", "Cook until fish is done"],
    category: "non-veg-curries",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Prawn Curry",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["500g prawns", "Coconut milk", "Onions", "Tomatoes", "Ginger-garlic paste", "Curry leaves", "Mustard seeds", "Turmeric", "Red chili powder", "Coconut oil"],
    steps: ["Clean and devein prawns", "Heat coconut oil", "Add mustard seeds and curry leaves", "Add onions and ginger-garlic paste", "Add tomatoes and spices", "Add coconut milk", "Bring to boil", "Add prawns and cook", "Serve with rice"],
    category: "non-veg-curries",
    prepTime: "25 minutes",
    servings: "4"
  },
  {
    name: "Egg Curry",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
    ingredients: ["6 boiled eggs", "2 onions", "3 tomatoes", "Ginger-garlic paste", "Coconut milk", "Turmeric", "Red chili powder", "Garam masala", "Curry leaves", "Oil"],
    steps: ["Boil and peel eggs", "Heat oil and fry eggs lightly", "Remove eggs and set aside", "Add onions and cook", "Add ginger-garlic paste", "Add tomatoes and spices", "Add coconut milk", "Add fried eggs", "Simmer for 10 minutes"],
    category: "non-veg-curries",
    prepTime: "35 minutes",
    servings: "3-4"
  },

  // Snacks - 5 items
  {
    name: "Samosa",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    ingredients: ["2 cups flour", "Potatoes", "Green peas", "Onions", "Ginger", "Green chilies", "Cumin seeds", "Coriander seeds", "Garam masala", "Oil for frying"],
    steps: ["Make dough with flour and oil", "Prepare potato filling with spices", "Roll dough into circles", "Cut circles in half", "Make cone shape and fill", "Seal edges with water", "Deep fry until golden", "Serve hot with chutney"],
    category: "snacks",
    prepTime: "1 hour",
    servings: "20 pieces"
  },
  {
    name: "Pakora",
    image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=800",
    ingredients: ["1 cup chickpea flour", "Mixed vegetables", "Onions", "Green chilies", "Ginger", "Cumin seeds", "Red chili powder", "Salt", "Water", "Oil for frying"],
    steps: ["Make batter with chickpea flour", "Add spices and water", "Slice vegetables thinly", "Mix vegetables with batter", "Heat oil for deep frying", "Drop spoonfuls of mixture", "Fry until golden brown", "Serve hot with tea"],
    category: "snacks",
    prepTime: "30 minutes",
    servings: "25 pieces"
  },
  {
    name: "Aloo Tikki",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800",
    ingredients: ["4 potatoes", "Green peas", "Ginger", "Green chilies", "Cumin powder", "Garam masala", "Breadcrumbs", "Cornflour", "Oil for frying", "Chaat masala"],
    steps: ["Boil and mash potatoes", "Add peas and spices", "Mix well and shape into patties", "Coat with breadcrumbs", "Shallow fry until golden", "Flip and cook other side", "Sprinkle chaat masala", "Serve with chutneys"],
    category: "snacks",
    prepTime: "40 minutes",
    servings: "8-10 pieces"
  },
  {
    name: "Paneer Tikka",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800",
    ingredients: ["250g paneer", "Bell peppers", "Onions", "Yogurt", "Ginger-garlic paste", "Red chili powder", "Garam masala", "Lemon juice", "Oil", "Chat masala"],
    steps: ["Cut paneer and vegetables", "Make marinade with yogurt and spices", "Marinate paneer for 30 minutes", "Thread on skewers", "Grill or roast in oven", "Cook until golden", "Sprinkle chat masala", "Serve hot"],
    category: "snacks",
    prepTime: "45 minutes",
    servings: "15-20 pieces"
  },
  {
    name: "Dhokla",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["1 cup chickpea flour", "Yogurt", "Ginger paste", "Green chilies", "Turmeric", "Sugar", "Salt", "Eno fruit salt", "Mustard seeds", "Curry leaves"],
    steps: ["Mix chickpea flour with yogurt", "Add ginger, chilies, and spices", "Add water to make batter", "Add eno and mix", "Steam for 15 minutes", "Prepare tempering", "Pour over steamed dhokla", "Garnish and serve"],
    category: "snacks",
    prepTime: "30 minutes",
    servings: "12 pieces"
  },

  // Juices - 5 items
  {
    name: "Orange Juice",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800",
    ingredients: ["6 fresh oranges", "Sugar to taste", "Black salt", "Ice cubes", "Mint leaves for garnish"],
    steps: ["Wash oranges thoroughly", "Cut and extract juice", "Strain to remove pulp", "Add sugar and black salt", "Mix well until dissolved", "Add ice cubes", "Garnish with mint", "Serve fresh"],
    category: "juices",
    prepTime: "10 minutes",
    servings: "2-3"
  },
  {
    name: "Watermelon Juice",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800",
    ingredients: ["2 cups watermelon chunks", "Sugar (optional)", "Black salt", "Lemon juice", "Ice cubes", "Mint leaves"],
    steps: ["Remove seeds from watermelon", "Blend watermelon chunks", "Strain if desired", "Add lemon juice", "Add black salt and sugar", "Mix well", "Serve over ice", "Garnish with mint"],
    category: "juices",
    prepTime: "8 minutes",
    servings: "2"
  },
  {
    name: "Pomegranate Juice",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800",
    ingredients: ["2 large pomegranates", "Sugar to taste", "Black salt", "Lemon juice", "Ice cubes", "Chaat masala"],
    steps: ["Remove pomegranate seeds", "Blend seeds gently", "Strain to extract juice", "Add lemon juice", "Add sugar and black salt", "Mix thoroughly", "Add ice cubes", "Sprinkle chaat masala"],
    category: "juices",
    prepTime: "15 minutes",
    servings: "2"
  },
  {
    name: "Carrot Juice",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800",
    ingredients: ["4 large carrots", "Ginger piece", "Lemon juice", "Sugar", "Black salt", "Ice cubes", "Mint leaves"],
    steps: ["Wash and peel carrots", "Cut into pieces", "Blend with little water", "Add ginger while blending", "Strain the juice", "Add lemon juice and seasonings", "Serve chilled", "Garnish with mint"],
    category: "juices",
    prepTime: "12 minutes",
    servings: "2"
  },
  {
    name: "Mixed Fruit Juice",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800",
    ingredients: ["Apple", "Orange", "Pomegranate", "Grapes", "Sugar", "Black salt", "Lemon juice", "Ice cubes", "Mint"],
    steps: ["Prepare all fruits", "Extract juices separately", "Mix all juices together", "Add sugar and black salt", "Add lemon juice", "Mix well", "Add ice cubes", "Serve fresh"],
    category: "juices",
    prepTime: "20 minutes",
    servings: "3"
  },

  // Desserts & Sweets - 5 items
  {
    name: "Gulab Jamun",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["1 cup milk powder", "1/4 cup flour", "Ghee", "Milk", "Sugar", "Water", "Cardamom", "Rose water", "Oil for frying"],
    steps: ["Mix milk powder and flour", "Add ghee and milk to make dough", "Make small balls", "Heat oil for frying", "Fry balls until brown", "Make sugar syrup", "Add cardamom and rose water", "Soak fried balls in syrup"],
    category: "desserts-sweets",
    prepTime: "45 minutes",
    servings: "15 pieces"
  },
  {
    name: "Kheer",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["1/2 cup basmati rice", "1 liter milk", "Sugar", "Cardamom", "Almonds", "Pistachios", "Raisins", "Saffron", "Ghee"],
    steps: ["Wash and soak rice", "Boil milk in heavy pan", "Add rice and cook", "Stir frequently", "Add sugar and cardamom", "Add nuts and raisins", "Add saffron soaked in milk", "Cook until thick"],
    category: "desserts-sweets",
    prepTime: "1 hour",
    servings: "4-5"
  },
  {
    name: "Rasgulla",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["1 liter milk", "Lemon juice", "Sugar", "Water", "Cardamom powder", "Rose water"],
    steps: ["Boil milk and add lemon juice", "Strain to get chenna", "Wash chenna in cold water", "Knead to make smooth", "Make small balls", "Boil sugar syrup", "Add balls to boiling syrup", "Cook for 15 minutes"],
    category: "desserts-sweets",
    prepTime: "1 hour",
    servings: "12 pieces"
  },
  {
    name: "Jalebi",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["1 cup flour", "Yogurt", "Sugar", "Water", "Saffron", "Cardamom", "Lemon juice", "Oil for frying", "Baking powder"],
    steps: ["Make batter with flour and yogurt", "Ferment for 4 hours", "Make sugar syrup", "Add saffron and cardamom", "Heat oil for frying", "Make spiral shapes in oil", "Fry until golden", "Dip in warm syrup"],
    category: "desserts-sweets",
    prepTime: "4.5 hours",
    servings: "20 pieces"
  },
  {
    name: "Halwa",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["1 cup semolina", "Ghee", "Sugar", "Water", "Milk", "Cardamom", "Almonds", "Cashews", "Raisins"],
    steps: ["Roast semolina in ghee", "Boil water with sugar", "Add roasted semolina slowly", "Stir continuously", "Add milk and cardamom", "Cook until thick", "Add nuts and raisins", "Serve hot or cold"],
    category: "desserts-sweets",
    prepTime: "30 minutes",
    servings: "4-5"
  },

  // Breakfast - 5 items
  {
    name: "Upma",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["1 cup semolina", "Vegetables", "Onions", "Ginger", "Green chilies", "Mustard seeds", "Curry leaves", "Ghee", "Salt", "Water"],
    steps: ["Roast semolina until fragrant", "Heat ghee and add mustard seeds", "Add curry leaves and green chilies", "Add onions and ginger", "Add vegetables and cook", "Add water and salt", "Add roasted semolina slowly", "Cook until thick"],
    category: "breakfast",
    prepTime: "25 minutes",
    servings: "3-4"
  },
  {
    name: "Poha",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["2 cups flattened rice", "Onions", "Potatoes", "Green chilies", "Ginger", "Mustard seeds", "Turmeric", "Curry leaves", "Oil", "Lemon juice"],
    steps: ["Wash and drain poha", "Heat oil and add mustard seeds", "Add curry leaves and green chilies", "Add onions and potatoes", "Add turmeric and salt", "Add drained poha", "Mix gently", "Add lemon juice and serve"],
    category: "breakfast",
    prepTime: "20 minutes",
    servings: "3-4"
  },
  {
    name: "Idli",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["2 cups idli rice", "1 cup urad dal", "Salt", "Water", "Oil for greasing"],
    steps: ["Soak rice and dal separately", "Grind to smooth paste", "Mix both batters", "Add salt and ferment overnight", "Grease idli molds", "Pour batter in molds", "Steam for 12-15 minutes", "Serve with sambar and chutney"],
    category: "breakfast",
    prepTime: "12 hours fermentation + 30 minutes",
    servings: "20 pieces"
  },
  {
    name: "Dosa",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["3 cups rice", "1 cup urad dal", "Fenugreek seeds", "Salt", "Oil", "Water"],
    steps: ["Soak rice, dal, and fenugreek seeds", "Grind to smooth batter", "Ferment overnight", "Heat non-stick pan", "Pour batter and spread thin", "Cook until golden", "Flip if needed", "Serve with chutney and sambar"],
    category: "breakfast",
    prepTime: "12 hours fermentation + 20 minutes",
    servings: "10-12 pieces"
  },
  {
    name: "Paratha",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["2 cups wheat flour", "Water", "Salt", "Oil", "Ghee for cooking", "Filling (potato/paneer/vegetables)"],
    steps: ["Make dough with flour and water", "Prepare filling with spices", "Roll dough into circles", "Add filling and seal", "Roll gently to flatten", "Cook on hot griddle", "Apply ghee on both sides", "Serve hot with yogurt"],
    category: "breakfast",
    prepTime: "40 minutes",
    servings: "6-8 pieces"
  },

  // Street Food - 5 items
  {
    name: "Pani Puri",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    ingredients: ["30 puris", "Boiled potatoes", "Chickpeas", "Tamarind chutney", "Mint chutney", "Spiced water", "Onions", "Chaat masala", "Sev"],
    steps: ["Prepare spiced water with mint and tamarind", "Mash potatoes with spices", "Make small hole in puris", "Fill with potato and chickpeas", "Dip in mint chutney", "Fill with spiced water", "Eat immediately", "Sprinkle sev on top"],
    category: "street-food",
    prepTime: "30 minutes",
    servings: "30 pieces"
  },
  {
    name: "Bhel Puri",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    ingredients: ["Puffed rice", "Sev", "Onions", "Tomatoes", "Boiled potatoes", "Tamarind chutney", "Mint chutney", "Chaat masala", "Coriander leaves"],
    steps: ["Mix puffed rice and sev", "Add chopped onions and tomatoes", "Add boiled potatoes", "Add both chutneys", "Mix everything well", "Sprinkle chaat masala", "Garnish with coriander", "Serve immediately"],
    category: "street-food",
    prepTime: "15 minutes",
    servings: "4"
  },
  {
    name: "Vada Pav",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    ingredients: ["Pav bread", "Potatoes", "Chickpea flour", "Green chilies", "Ginger", "Mustard seeds", "Turmeric", "Oil", "Garlic chutney", "Green chutney"],
    steps: ["Boil and mash potatoes", "Prepare spiced potato filling", "Make chickpea flour batter", "Shape potato mixture into balls", "Dip in batter and deep fry", "Slice pav horizontally", "Apply chutneys", "Place vada between pav"],
    category: "street-food",
    prepTime: "45 minutes",
    servings: "6 pieces"
  },
  {
    name: "Dahi Vada",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    ingredients: ["1 cup urad dal", "Yogurt", "Tamarind chutney", "Mint chutney", "Chaat masala", "Cumin powder", "Salt", "Sugar", "Oil for frying"],
    steps: ["Soak urad dal for 4 hours", "Grind to smooth paste", "Shape into balls and deep fry", "Soak fried vadas in warm water", "Squeeze out water gently", "Arrange in serving plate", "Pour whisked yogurt", "Top with chutneys and spices"],
    category: "street-food",
    prepTime: "5 hours",
    servings: "15 pieces"
  },
  {
    name: "Aloo Chaat",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800",
    ingredients: ["4 boiled potatoes", "Onions", "Tomatoes", "Green chilies", "Tamarind chutney", "Mint chutney", "Chaat masala", "Red chili powder", "Lemon juice", "Sev"],
    steps: ["Cut boiled potatoes into cubes", "Chop onions and tomatoes", "Mix potatoes with vegetables", "Add all chutneys", "Sprinkle chaat masala and spices", "Add lemon juice", "Mix well", "Garnish with sev"],
    category: "street-food",
    prepTime: "20 minutes",
    servings: "4"
  },

  // South Indian - 5 items
  {
    name: "Sambar",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800",
    ingredients: ["1 cup toor dal", "Mixed vegetables", "Tamarind", "Sambar powder", "Turmeric", "Mustard seeds", "Curry leaves", "Asafoetida", "Oil", "Coriander leaves"],
    steps: ["Cook toor dal until soft", "Extract tamarind juice", "Cook vegetables with turmeric", "Add cooked dal to vegetables", "Add tamarind juice and sambar powder", "Prepare tempering with mustard seeds", "Add curry leaves and asafoetida", "Pour over sambar and simmer"],
    category: "south-indian",
    prepTime: "40 minutes",
    servings: "4-5"
  },
  {
    name: "Rasam",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800",
    ingredients: ["Toor dal", "Tomatoes", "Tamarind", "Rasam powder", "Turmeric", "Mustard seeds", "Cumin seeds", "Curry leaves", "Ghee", "Coriander leaves"],
    steps: ["Cook toor dal and extract water", "Extract tamarind juice", "Crush tomatoes", "Boil tamarind juice with tomatoes", "Add rasam powder and turmeric", "Add dal water", "Prepare tempering", "Add to rasam and simmer"],
    category: "south-indian",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Coconut Chutney",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["1 cup grated coconut", "Green chilies", "Ginger", "Roasted chana dal", "Salt", "Water", "Mustard seeds", "Urad dal", "Curry leaves", "Oil"],
    steps: ["Grind coconut with green chilies", "Add ginger and roasted chana dal", "Add salt and little water", "Grind to smooth paste", "Heat oil for tempering", "Add mustard seeds and urad dal", "Add curry leaves", "Pour over chutney"],
    category: "south-indian",
    prepTime: "15 minutes",
    servings: "4"
  },
  {
    name: "Medu Vada",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["1 cup urad dal", "Green chilies", "Ginger", "Curry leaves", "Black pepper", "Cumin seeds", "Salt", "Oil for frying"],
    steps: ["Soak urad dal for 4 hours", "Grind to fluffy paste", "Add chopped chilies and ginger", "Add curry leaves and spices", "Add salt and mix", "Shape into donuts with hole", "Deep fry until golden", "Serve hot with chutney"],
    category: "south-indian",
    prepTime: "5 hours",
    servings: "12 pieces"
  },
  {
    name: "Uttapam",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Dosa batter", "Onions", "Tomatoes", "Green chilies", "Coriander leaves", "Carrots", "Oil", "Salt"],
    steps: ["Prepare dosa batter", "Chop all vegetables finely", "Heat non-stick pan", "Pour thick layer of batter", "Sprinkle vegetables on top", "Press gently", "Cook until golden", "Flip and cook other side"],
    category: "south-indian",
    prepTime: "20 minutes",
    servings: "6 pieces"
  },

  // North Indian - 5 items
  {
    name: "Rajma",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800",
    ingredients: ["1 cup kidney beans", "2 onions", "3 tomatoes", "Ginger-garlic paste", "Cumin seeds", "Coriander powder", "Red chili powder", "Garam masala", "Ghee", "Coriander leaves"],
    steps: ["Soak rajma overnight", "Pressure cook until soft", "Heat ghee and add cumin seeds", "Add onions and cook until golden", "Add ginger-garlic paste", "Add tomatoes and spices", "Add cooked rajma with water", "Simmer for 20 minutes"],
    category: "north-indian",
    prepTime: "12 hours soaking + 1 hour",
    servings: "4-5"
  },
  {
    name: "Chole",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800",
    ingredients: ["1 cup chickpeas", "2 onions", "3 tomatoes", "Ginger-garlic paste", "Chole masala", "Tea bags", "Bay leaves", "Cumin seeds", "Oil", "Coriander leaves"],
    steps: ["Soak chickpeas overnight", "Pressure cook with tea bags", "Heat oil and add cumin seeds", "Add onions and cook", "Add ginger-garlic paste", "Add tomatoes and spices", "Add cooked chickpeas", "Simmer until thick"],
    category: "north-indian",
    prepTime: "12 hours soaking + 1 hour",
    servings: "4-5"
  },
  {
    name: "Butter Chicken",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
    ingredients: ["500g chicken", "Butter", "Heavy cream", "Tomato puree", "Onions", "Ginger-garlic paste", "Garam masala", "Red chili powder", "Kasuri methi", "Sugar"],
    steps: ["Marinate chicken with spices", "Cook chicken in tandoor or grill", "Make tomato-onion gravy", "Add cooked chicken to gravy", "Add butter and cream", "Add kasuri methi", "Simmer for 10 minutes", "Serve with naan"],
    category: "north-indian",
    prepTime: "1 hour",
    servings: "4-5"
  }, {
    name: "Kung Pao Chicken",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    ingredients: ["500g chicken breast", "Peanuts", "Dried red chilies", "Soy sauce", "Rice vinegar", "Cornstarch", "Garlic", "Ginger", "Spring onions", "Sugar"],
    steps: ["Cut chicken into cubes", "Marinate with soy sauce and cornstarch", "Stir-fry chicken until golden", "Add garlic, ginger, and chilies", "Add sauce mixture", "Toss in peanuts and spring onions", "Serve hot with rice"],
    category: "chinese",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Sweet and Sour Pork",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800",
    ingredients: ["500g pork shoulder", "Bell peppers", "Pineapple chunks", "Onion", "Ketchup", "Rice vinegar", "Brown sugar", "Cornstarch", "Egg", "Oil for frying"],
    steps: ["Cut pork into chunks", "Coat with egg and cornstarch", "Deep fry until golden", "Stir-fry vegetables", "Make sweet and sour sauce", "Combine pork with vegetables and sauce", "Serve immediately"],
    category: "chinese",
    prepTime: "45 minutes",
    servings: "4"
  },
  {
    name: "Mapo Tofu",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800",
    ingredients: ["400g silken tofu", "200g ground pork", "Doubanjiang paste", "Soy sauce", "Chicken stock", "Cornstarch", "Garlic", "Ginger", "Spring onions", "Sichuan peppercorns"],
    steps: ["Cut tofu into cubes", "Brown ground pork", "Add garlic and ginger", "Add doubanjiang paste", "Add stock and bring to boil", "Add tofu gently", "Thicken with cornstarch slurry", "Garnish with spring onions"],
    category: "chinese",
    prepTime: "25 minutes",
    servings: "3-4"
  },
  {
    name: "Char Siu",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800",
    ingredients: ["1kg pork shoulder", "Hoisin sauce", "Soy sauce", "Rice wine", "Honey", "Five-spice powder", "Red food coloring", "Garlic", "Ginger", "Sesame oil"],
    steps: ["Marinate pork overnight", "Preheat oven to 180°C", "Roast for 30 minutes", "Baste with marinade", "Continue roasting for 20 minutes", "Glaze with honey", "Rest before slicing", "Serve with steamed rice"],
    category: "chinese",
    prepTime: "1 hour (plus marinating)",
    servings: "6-8"
  },

  // 2. ITALIAN
  {
    name: "Spaghetti Carbonara",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800",
    ingredients: ["400g spaghetti", "200g guanciale", "4 eggs", "100g Pecorino Romano", "Black pepper", "Salt"],
    steps: ["Cook spaghetti in salted water", "Crisp guanciale in pan", "Whisk eggs with cheese", "Toss hot pasta with guanciale", "Add egg mixture off heat", "Toss quickly to create creamy sauce", "Season with pepper", "Serve immediately"],
    category: "italian",
    prepTime: "20 minutes",
    servings: "4"
  },
  {
    name: "Margherita Pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Pizza dough", "San Marzano tomatoes", "Fresh mozzarella", "Fresh basil", "Extra virgin olive oil", "Salt", "Garlic"],
    steps: ["Preheat oven to 250°C", "Roll out pizza dough", "Spread tomato sauce", "Add torn mozzarella", "Drizzle with olive oil", "Bake for 10-12 minutes", "Add fresh basil", "Serve hot"],
    category: "italian",
    prepTime: "30 minutes",
    servings: "2-3"
  },
  {
    name: "Risotto alla Milanese",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800",
    ingredients: ["320g Arborio rice", "1L chicken stock", "Saffron threads", "White wine", "Onion", "Parmesan cheese", "Butter", "Beef marrow"],
    steps: ["Warm stock with saffron", "Sauté onion in butter", "Add rice and toast", "Add wine and stir", "Add stock ladle by ladle", "Stir constantly for 18 minutes", "Finish with butter and cheese", "Serve immediately"],
    category: "italian",
    prepTime: "45 minutes",
    servings: "4"
  },
  {
    name: "Tiramisu",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800",
    ingredients: ["Ladyfinger cookies", "Strong espresso", "Mascarpone cheese", "Eggs", "Sugar", "Cocoa powder", "Dark rum", "Heavy cream"],
    steps: ["Separate eggs", "Whisk yolks with sugar", "Beat in mascarpone", "Whip egg whites", "Fold whites into mascarpone", "Dip cookies in coffee", "Layer cookies and cream", "Dust with cocoa", "Chill overnight"],
    category: "italian",
    prepTime: "30 minutes (plus chilling)",
    servings: "8"
  },

  // 3. MEXICAN
  {
    name: "Chicken Tacos al Pastor",
    image: "https://images.unsplash.com/photo-1565299585323-38174c4a6c05?w=800",
    ingredients: ["500g chicken thighs", "Pineapple", "Corn tortillas", "Achiote paste", "Orange juice", "Lime", "White onion", "Cilantro", "Guajillo chilies", "Garlic"],
    steps: ["Marinate chicken in achiote paste", "Grill chicken with pineapple", "Warm tortillas", "Dice chicken and pineapple", "Fill tortillas", "Top with onion and cilantro", "Squeeze lime", "Serve with salsa"],
    category: "mexican",
    prepTime: "40 minutes",
    servings: "4"
  },
  {
    name: "Beef Enchiladas",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",
    ingredients: ["Corn tortillas", "Ground beef", "Enchilada sauce", "Cheddar cheese", "Onion", "Cumin", "Chili powder", "Sour cream", "Lettuce", "Tomatoes"],
    steps: ["Brown ground beef with spices", "Warm tortillas", "Fill with beef and cheese", "Roll tightly", "Place in baking dish", "Cover with sauce and cheese", "Bake at 180°C for 20 minutes", "Garnish and serve"],
    category: "mexican",
    prepTime: "45 minutes",
    servings: "6"
  },
  {
    name: "Guacamole",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800",
    ingredients: ["4 ripe avocados", "1 lime", "1 small onion", "2 tomatoes", "2 jalapeños", "Fresh cilantro", "Salt", "Garlic"],
    steps: ["Mash avocados with fork", "Add lime juice immediately", "Dice onion finely", "Dice tomatoes", "Mince jalapeños", "Mix all ingredients", "Season with salt", "Serve with tortilla chips"],
    category: "mexican",
    prepTime: "15 minutes",
    servings: "4-6"
  },
  {
    name: "Pozole Rojo",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800",
    ingredients: ["Pork shoulder", "Hominy", "Guajillo chilies", "Ancho chilies", "Garlic", "Onion", "Bay leaves", "Oregano", "Cabbage", "Radishes", "Lime"],
    steps: ["Simmer pork with bay leaves", "Toast and rehydrate chilies", "Blend chilies with garlic", "Strain chili sauce", "Add sauce to pork broth", "Add hominy", "Simmer for 30 minutes", "Serve with garnishes"],
    category: "mexican",
    prepTime: "2 hours",
    servings: "8"
  },

  // 4. RICE VARIETIES
  
  {
    name: "Vegetable Fried Rice",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    ingredients: ["Cooked rice", "Mixed vegetables", "Eggs", "Soy sauce", "Sesame oil", "Garlic", "Ginger", "Spring onions", "Oil", "Salt"],
    steps: ["Heat oil in wok", "Scramble eggs and set aside", "Stir-fry vegetables", "Add garlic and ginger", "Add rice and break lumps", "Add soy sauce and sesame oil", "Add scrambled eggs", "Garnish with spring onions"],
    category: "rice-varieties",
    prepTime: "20 minutes",
    servings: "4"
  },
  {
    name: "Coconut Rice",
    image: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?w=800",
    ingredients: ["Basmati rice", "Coconut milk", "Water", "Salt", "Curry leaves", "Mustard seeds", "Urad dal", "Chana dal", "Ginger", "Green chilies"],
    steps: ["Wash and soak rice", "Heat oil and add mustard seeds", "Add dals and curry leaves", "Add ginger and chilies", "Add rice and fry briefly", "Add coconut milk and water", "Simmer until rice is cooked", "Serve hot"],
    category: "rice-varieties",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Lemon Rice",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800",
    ingredients: ["Cooked rice", "Lemon juice", "Turmeric", "Mustard seeds", "Curry leaves", "Peanuts", "Green chilies", "Ginger", "Oil", "Salt"],
    steps: ["Cool cooked rice completely", "Heat oil in pan", "Add mustard seeds", "Add curry leaves and chilies", "Add peanuts and fry", "Add turmeric", "Add rice and mix gently", "Add lemon juice and salt", "Mix well and serve"],
    category: "rice-varieties",
    prepTime: "15 minutes",
    servings: "4"
  },

  // 5. ROTI-PARATHA
  {
    name: "Aloo Paratha",
    image: "https://images.unsplash.com/photo-1626132647523-66f6bf644d2e?w=800",
    ingredients: ["Wheat flour", "Potatoes", "Green chilies", "Ginger", "Cilantro", "Cumin seeds", "Red chili powder", "Garam masala", "Salt", "Ghee"],
    steps: ["Make soft dough", "Boil and mash potatoes", "Mix spices with potatoes", "Roll dough into circles", "Add potato filling", "Seal and roll again", "Cook on tawa with ghee", "Serve hot with yogurt"],
    category: "roti-paratha",
    prepTime: "45 minutes",
    servings: "4"
  },
  {
    name: "Butter Naan",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
    ingredients: ["All-purpose flour", "Yogurt", "Baking powder", "Sugar", "Salt", "Milk", "Butter", "Garlic", "Cilantro"],
    steps: ["Mix flour, baking powder, salt, sugar", "Add yogurt and milk", "Knead into soft dough", "Rest for 2 hours", "Roll into oval shapes", "Cook in tandoor or oven", "Brush with garlic butter", "Garnish with cilantro"],
    category: "roti-paratha",
    prepTime: "3 hours",
    servings: "6"
  },
  {
    name: "Methi Thepla",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800",
    ingredients: ["Wheat flour", "Fenugreek leaves", "Yogurt", "Ginger-garlic paste", "Green chilies", "Turmeric", "Red chili powder", "Ajwain", "Oil", "Salt"],
    steps: ["Chop fenugreek leaves finely", "Mix flour with spices", "Add methi and yogurt", "Make soft dough with oil", "Rest for 30 minutes", "Roll into thin circles", "Cook on tawa", "Serve with pickle"],
    category: "roti-paratha",
    prepTime: "1 hour",
    servings: "8"
  },
  {
    name: "Makki di Roti",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Corn flour", "Warm water", "Salt", "Ghee", "Carom seeds"],
    steps: ["Mix corn flour with salt", "Add carom seeds", "Add warm water gradually", "Knead into firm dough", "Rest for 15 minutes", "Roll between plastic sheets", "Cook on hot tawa", "Apply ghee and serve"],
    category: "roti-paratha",
    prepTime: "30 minutes",
    servings: "4"
  },

  // 6. GRAVY DISHES

  {
    name: "Palak Paneer",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800",
    ingredients: ["Paneer", "Spinach", "Onions", "Tomatoes", "Ginger-garlic paste", "Green chilies", "Cream", "Garam masala", "Cumin seeds", "Ghee"],
    steps: ["Blanch spinach and puree", "Fry paneer cubes", "Sauté onions and tomatoes", "Add ginger-garlic paste", "Add spinach puree", "Add spices and simmer", "Add paneer and cream", "Serve hot"],
    category: "gravy-dishes",
    prepTime: "45 minutes",
    servings: "4"
  },
  {
    name: "Rajma Masala",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
    ingredients: ["Kidney beans", "Onions", "Tomatoes", "Ginger-garlic paste", "Cumin seeds", "Coriander powder", "Red chili powder", "Garam masala", "Bay leaves", "Oil"],
    steps: ["Soak and pressure cook rajma", "Make onion-tomato base", "Add ginger-garlic paste", "Add spices and cook", "Add cooked rajma with water", "Simmer for 20 minutes", "Mash some beans", "Garnish with cilantro"],
    category: "gravy-dishes",
    prepTime: "1.5 hours",
    servings: "4"
  },
 const vegGravyDishes = [
  {
    name: "Paneer Butter Masala",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800",
    ingredients: ["250g paneer cubes", "2 large tomatoes", "1 large onion", "4-5 cashews", "2 tbsp butter", "2 tbsp heavy cream", "1 tsp ginger-garlic paste", "1 tsp red chili powder", "1/2 tsp garam masala", "1/2 tsp turmeric powder", "1 tsp kasuri methi", "1 tsp sugar", "Salt to taste", "Fresh coriander"],
    steps: ["Blanch tomatoes and make smooth puree with onions and cashews", "Heat butter in pan, lightly fry paneer cubes and set aside", "In same pan, add ginger-garlic paste and sauté", "Add tomato-onion puree and cook until oil separates", "Add all spices and cook for 2-3 minutes", "Add paneer cubes and mix gently", "Add cream and kasuri methi", "Simmer for 5-7 minutes", "Garnish with coriander and serve hot"],
    category: "vegetarian-gravy",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Dal Makhani",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800",
    ingredients: ["1 cup black urad dal", "1/4 cup rajma (kidney beans)", "3-4 tomatoes", "1 onion finely chopped", "3 tbsp butter", "2 tbsp heavy cream", "1 tbsp ginger-garlic paste", "2 green chilies", "1 tsp cumin seeds", "1 tsp red chili powder", "1/2 tsp garam masala", "1 bay leaf", "Salt to taste", "Fresh coriander leaves"],
    steps: ["Soak dal and rajma overnight, then pressure cook until soft", "Heat butter, add cumin seeds and bay leaf", "Add chopped onions and cook until golden", "Add ginger-garlic paste and green chilies", "Add chopped tomatoes and cook until mushy", "Add cooked dal and rajma with cooking liquid", "Add spices and simmer for 30-40 minutes", "Mash lightly and add cream", "Cook on low heat for 10 more minutes", "Garnish with coriander and serve"],
    category: "vegetarian-gravy",
    prepTime: "1 hour 30 minutes",
    servings: "6"
  },
  {
    name: "Aloo Gobi Masala",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
    ingredients: ["2 medium potatoes cut in cubes", "1 medium cauliflower cut in florets", "2 tomatoes chopped", "1 large onion sliced", "1 tbsp ginger-garlic paste", "2 green chilies", "1 tsp cumin seeds", "1 tsp coriander seeds", "1 tsp red chili powder", "1/2 tsp turmeric powder", "1 tsp garam masala", "3 tbsp oil", "Salt to taste", "Fresh coriander leaves"],
    steps: ["Heat oil in pan, add cumin and coriander seeds", "Add sliced onions and cook until golden", "Add ginger-garlic paste and green chilies", "Add chopped tomatoes and cook until soft", "Add potatoes and cauliflower", "Add all spices and salt", "Mix well and cook covered for 15-20 minutes", "Stir occasionally and add water if needed", "Cook until vegetables are tender", "Garnish with fresh coriander and serve"],
    category: "vegetarian-gravy",
    prepTime: "35 minutes",
    servings: "4-5"
  };

  // 7. TANDOORI
  {
    name: "Tandoori Chicken",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800",
    ingredients: ["Whole chicken", "Yogurt", "Lemon juice", "Ginger-garlic paste", "Red chili powder", "Tandoori masala", "Garam masala", "Turmeric", "Salt", "Oil"],
    steps: ["Make deep cuts in chicken", "Mix yogurt with all spices", "Marinate chicken for 4 hours", "Preheat oven to 200°C", "Roast for 45 minutes", "Baste with oil halfway", "Char on high heat", "Serve with mint chutney"],
    category: "tandoori",
    prepTime: "1 hour (plus marinating)",
    servings: "4"
  },
  {
    name: "Tandoori Paneer Tikka",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800",
    ingredients: ["Paneer cubes", "Bell peppers", "Onions", "Yogurt", "Ginger-garlic paste", "Tandoori masala", "Red chili powder", "Lemon juice", "Chaat masala", "Oil"],
    steps: ["Cut paneer and vegetables", "Mix yogurt with spices", "Marinate for 1 hour", "Thread on skewers", "Grill in tandoor or oven", "Turn frequently", "Brush with oil", "Sprinkle chaat masala"],
    category: "tandoori",
    prepTime: "30 minutes (plus marinating)",
    servings: "4"
  },
  {
    name: "Tandoori Fish",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    ingredients: ["Fish fillets", "Yogurt", "Lemon juice", "Ginger-garlic paste", "Red chili powder", "Turmeric", "Carom seeds", "Mustard oil", "Salt", "Cilantro"],
    steps: ["Clean and pat dry fish", "Mix marinade ingredients", "Marinate fish for 30 minutes", "Preheat grill", "Cook for 4-5 minutes each side", "Baste with oil", "Check for doneness", "Garnish with cilantro"],
    category: "tandoori",
    prepTime: "45 minutes",
    servings: "4"
  },
  {
    name: "Seekh Kebab",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Ground mutton", "Onions", "Ginger-garlic paste", "Green chilies", "Cilantro", "Mint leaves", "Red chili powder", "Garam masala", "Cumin powder", "Egg"],
    steps: ["Mix all ingredients thoroughly", "Knead for 5 minutes", "Rest for 1 hour", "Shape on skewers", "Cook in tandoor", "Turn every 2 minutes", "Cook until golden", "Serve with onions and chutney"],
    category: "tandoori",
    prepTime: "45 minutes (plus resting)",
    servings: "6"
  },

  // 8. STIR-FRY
  {
    name: "Vegetable Stir Fry",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    ingredients: ["Mixed vegetables", "Soy sauce", "Garlic", "Ginger", "Sesame oil", "Cornstarch", "Vegetable oil", "Salt", "Sugar", "Spring onions"],
    steps: ["Heat oil in wok", "Add garlic and ginger", "Add hard vegetables first", "Stir-fry on high heat", "Add soft vegetables", "Add sauce mixture", "Toss everything together", "Garnish with spring onions"],
    category: "stir-fry",
    prepTime: "15 minutes",
    servings: "4"
  },
  {
    name: "Chicken Teriyaki Stir Fry",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    ingredients: ["Chicken breast", "Broccoli", "Bell peppers", "Teriyaki sauce", "Garlic", "Ginger", "Sesame oil", "Cornstarch", "Oil", "Sesame seeds"],
    steps: ["Slice chicken thinly", "Marinate with cornstarch", "Heat oil in wok", "Stir-fry chicken until golden", "Add vegetables", "Add teriyaki sauce", "Toss until glazed", "Sprinkle sesame seeds"],
    category: "stir-fry",
    prepTime: "25 minutes",
    servings: "4"
  },
  {
    name: "Beef and Broccoli Stir Fry",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800",
    ingredients: ["Beef strips", "Broccoli", "Soy sauce", "Oyster sauce", "Garlic", "Ginger", "Cornstarch", "Sesame oil", "Beef stock", "Oil"],
    steps: ["Marinate beef with soy sauce", "Blanch broccoli briefly", "Heat oil in wok", "Stir-fry beef until brown", "Add garlic and ginger", "Add broccoli", "Add sauce mixture", "Thicken and serve"],
    category: "stir-fry",
    prepTime: "20 minutes",
    servings: "4"
  },
  {
    name: "Shrimp and Cashew Stir Fry",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Shrimp", "Cashews", "Bell peppers", "Onions", "Soy sauce", "Fish sauce", "Sugar", "Garlic", "Chilies", "Oil"],
    steps: ["Clean and devein shrimp", "Toast cashews until golden", "Heat oil in wok", "Stir-fry shrimp", "Add vegetables", "Add sauce ingredients", "Add toasted cashews", "Serve immediately"],
    category: "stir-fry",
    prepTime: "20 minutes",
    servings: "4"
  },

  // 9. HEALTHY-LOW-CAL
  {
    name: "Grilled Chicken Salad",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800",
    ingredients: ["Chicken breast", "Mixed greens", "Cherry tomatoes", "Cucumber", "Bell peppers", "Olive oil", "Lemon juice", "Herbs", "Salt", "Pepper"],
    steps: ["Season and grill chicken", "Prepare vegetables", "Mix greens and vegetables", "Slice grilled chicken", "Make simple vinaigrette", "Toss salad with dressing", "Top with chicken", "Serve fresh"],
    category: "healthy-low-cal",
    prepTime: "25 minutes",
    servings: "2"
  },
  {
    name: "Steamed Fish with Vegetables",
    image: "https://images.unsplash.com/photo-15revious44551763-46a013bb70d5?w=800",
    ingredients: ["White fish fillet", "Broccoli", "Carrots", "Zucchini", "Ginger", "Garlic", "Soy sauce", "Sesame oil", "Lemon", "Herbs"],
    steps: ["Season fish with herbs", "Cut vegetables uniformly", "Steam fish for 8 minutes", "Steam vegetables until tender", "Make ginger-soy dressing", "Arrange on plate", "Drizzle with dressing", "Serve immediately"],
    category: "healthy-low-cal",
    prepTime: "20 minutes",
    servings: "2"
  },
  {
    name: "Quinoa Buddha Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    ingredients: ["Quinoa", "Chickpeas", "Kale", "Sweet potato", "Avocado", "Tahini", "Lemon juice", "Olive oil", "Pumpkin seeds", "Salt"],
    steps: ["Cook quinoa until fluffy", "Roast sweet potato cubes", "Massage kale with oil", "Roast chickpeas with spices", "Make tahini dressing", "Assemble bowl with quinoa base", "Add all toppings", "Drizzle with dressing"],
    category: "healthy-low-cal",
    prepTime: "35 minutes",
    servings: "2"
  },
  {
    name: "Zucchini Noodles with Pesto",
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=800",
    ingredients: ["Zucchini", "Basil leaves", "Pine nuts", "Parmesan cheese", "Garlic", "Olive oil", "Cherry tomatoes", "Salt", "Pepper"],
    steps: ["Spiralize zucchini into noodles", "Make pesto with basil, nuts, cheese", "Sauté zucchini noodles briefly", "Toss with pesto", "Add cherry tomatoes", "Season with salt and pepper", "Serve immediately", "Garnish with parmesan"],
    category: "healthy-low-cal",
    prepTime: "15 minutes",
    servings: "2"
  },

  // 10. FESTIVE SPECIALS
  {
    name: "Gulab Jamun",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["Milk powder", "All-purpose flour", "Ghee", "Milk", "Sugar", "Water", "Cardamom", "Rose water", "Saffron", "Oil for frying"],
    steps: ["Make sugar syrup with cardamom", "Mix milk powder and flour", "Add ghee and milk to make dough", "Shape into smooth balls", "Deep fry until golden", "Soak in warm syrup", "Let absorb syrup", "Serve warm"],
    category: "festive-specials",
    prepTime: "1 hour",
    servings: "6"
  },
  {
    name: "Samosa",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    ingredients: ["All-purpose flour", "Potatoes", "Green peas", "Cumin seeds", "Coriander seeds", "Garam masala", "Green chilies", "Ginger", "Oil", "Salt"],
    steps: ["Make dough with flour and oil", "Prepare spiced potato filling", "Roll dough into circles", "Cut and shape into cones", "Fill with potato mixture", "Seal edges properly", "Deep fry until golden", "Serve with chutney"],
    category: "festive-specials",
    prepTime: "1.5 hours",
    servings: "8"
  }, 
  {
    name: "Chicken Pulao",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800",
    ingredients: ["500g chicken", "2 cups basmati rice", "Whole spices", "Onions", "Ginger-garlic paste", "Tomatoes", "Green chilies", "Ghee", "Salt", "Water"],
    steps: ["Wash and soak rice", "Cook chicken with spices", "Add rice to chicken", "Add water and bring to boil", "Cover and cook on low heat", "Let it rest before serving"],
    category: "one-pot-meals",
    prepTime: "1 hour",
    servings: "4-6"
  },
  {
    name: "Mixed Dal Khichdi",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800",
    ingredients: ["1 cup rice", "1/2 cup mixed dal", "Vegetables (carrots, peas)", "Turmeric", "Ginger", "Green chilies", "Ghee", "Cumin seeds", "Salt", "Water"],
    steps: ["Wash rice and dal together", "Heat ghee, add cumin seeds", "Add ginger, chilies", "Add rice, dal, vegetables", "Add water and turmeric", "Cook until soft and mushy"],
    category: "one-pot-meals",
    prepTime: "45 minutes",
    servings: "4"
  },
  {
    name: "Rajma Rice Bowl",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800",
    ingredients: ["1 cup rajma (kidney beans)", "1 cup rice", "Onions", "Tomatoes", "Ginger-garlic paste", "Red chili powder", "Garam masala", "Cumin seeds", "Oil", "Salt"],
    steps: ["Soak rajma overnight", "Pressure cook rajma", "Make masala with onions, tomatoes", "Add cooked rajma to masala", "Cook rice separately", "Serve rajma over rice"],
    category: "one-pot-meals",
    prepTime: "2 hours (including soaking)",
    servings: "4"
  },

  // BAKING CAKES
  {
    name: "Chocolate Fudge Cake",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    ingredients: ["2 cups flour", "1.5 cups sugar", "3/4 cup cocoa powder", "2 tsp baking soda", "1 tsp salt", "2 eggs", "1 cup milk", "1/2 cup oil", "1 tsp vanilla"],
    steps: ["Preheat oven to 350°F", "Mix dry ingredients", "Combine wet ingredients", "Mix wet and dry ingredients", "Pour into greased pan", "Bake for 30-35 minutes", "Cool and frost"],
    category: "baking-cakes",
    prepTime: "1 hour",
    servings: "8-10"
  },
  {
    name: "Vanilla Sponge Cake",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800",
    ingredients: ["2 cups flour", "1.5 cups sugar", "4 eggs", "1/2 cup butter", "1 cup milk", "2 tsp baking powder", "1 tsp vanilla extract", "Pinch of salt"],
    steps: ["Cream butter and sugar", "Add eggs one by one", "Add vanilla extract", "Alternate flour and milk", "Pour into lined pan", "Bake at 350°F for 25-30 minutes"],
    category: "baking-cakes",
    prepTime: "45 minutes",
    servings: "8"
  },
  {
    name: "Carrot Cake",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800",
    ingredients: ["2 cups flour", "2 cups sugar", "4 eggs", "1.5 cups oil", "3 cups grated carrots", "2 tsp cinnamon", "2 tsp baking soda", "1 tsp salt", "Walnuts"],
    steps: ["Mix dry ingredients", "Beat eggs and add oil", "Add carrots to egg mixture", "Combine wet and dry ingredients", "Add walnuts", "Bake at 350°F for 40-45 minutes"],
    category: "baking-cakes",
    prepTime: "1 hour 15 minutes",
    servings: "10-12"
  },
  {
    name: "Lemon Drizzle Cake",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800",
    ingredients: ["2 cups flour", "1 cup sugar", "4 eggs", "1/2 cup butter", "1/2 cup milk", "2 lemons (zest and juice)", "2 tsp baking powder", "Powdered sugar for drizzle"],
    steps: ["Cream butter and sugar", "Add eggs and lemon zest", "Fold in flour and milk", "Bake at 350°F for 30-35 minutes", "Make lemon drizzle with juice and powdered sugar", "Pour over warm cake"],
    category: "baking-cakes",
    prepTime: "1 hour",
    servings: "8"
  },

  // ICE CREAMS
  {
    name: "Vanilla Bean Ice Cream",
    image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=800",
    ingredients: ["2 cups heavy cream", "1 cup milk", "3/4 cup sugar", "6 egg yolks", "2 tsp vanilla extract", "1 vanilla bean pod", "Pinch of salt"],
    steps: ["Heat cream and milk with vanilla bean", "Whisk egg yolks with sugar", "Temper eggs with hot cream", "Cook until it coats spoon", "Strain and chill", "Churn in ice cream maker"],
    category: "ice-creams",
    prepTime: "4 hours (including chilling)",
    servings: "6-8"
  },
  {
    name: "Mango Kulfi",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800",
    ingredients: ["2 cups whole milk", "1/2 cup condensed milk", "1/4 cup sugar", "1 cup mango puree", "1/4 cup chopped almonds", "1/4 cup pistachios", "Cardamom powder"],
    steps: ["Boil milk until reduced to half", "Add condensed milk and sugar", "Cool completely", "Add mango puree and nuts", "Pour into kulfi molds", "Freeze for 6-8 hours"],
    category: "ice-creams",
    prepTime: "8 hours (including freezing)",
    servings: "8-10"
  },
  {
    name: "Chocolate Chip Ice Cream",
    image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=800",
    ingredients: ["2 cups heavy cream", "1 cup milk", "3/4 cup sugar", "6 egg yolks", "2 tsp vanilla", "1 cup chocolate chips", "Pinch of salt"],
    steps: ["Make vanilla custard base", "Chill the custard completely", "Churn in ice cream maker", "Add chocolate chips in last 5 minutes", "Transfer to container", "Freeze until firm"],
    category: "ice-creams",
    prepTime: "4 hours",
    servings: "6-8"
  },
  {
    name: "Strawberry Sorbet",
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800",
    ingredients: ["2 cups fresh strawberries", "3/4 cup sugar", "1/4 cup water", "2 tbsp lemon juice", "1 tbsp lemon zest", "Pinch of salt"],
    steps: ["Hull and chop strawberries", "Make simple syrup with sugar and water", "Blend strawberries with syrup", "Add lemon juice and zest", "Churn in ice cream maker", "Freeze until set"],
    category: "ice-creams",
    prepTime: "3 hours",
    servings: "4-6"
  },

  // SANDWICHES & WRAPS
  {
    name: "Club Sandwich",
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=800",
    ingredients: ["6 slices bread", "Grilled chicken breast", "Bacon strips", "Lettuce", "Tomatoes", "Mayonnaise", "Cheese slices", "Salt", "Black pepper"],
    steps: ["Toast bread slices", "Cook bacon until crispy", "Slice chicken and tomatoes", "Layer bread with mayo", "Add chicken, bacon, lettuce, tomatoes", "Secure with toothpicks", "Cut diagonally"],
    category: "sandwiches-wraps",
    prepTime: "20 minutes",
    servings: "2"
  },
  {
    name: "Veggie Wrap",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Large tortillas", "Hummus", "Lettuce", "Cucumbers", "Tomatoes", "Bell peppers", "Carrots", "Avocado", "Feta cheese", "Sprouts"],
    steps: ["Warm tortillas slightly", "Spread hummus on tortilla", "Layer with vegetables", "Add feta cheese and sprouts", "Roll tightly", "Cut in half", "Serve immediately"],
    category: "sandwiches-wraps",
    prepTime: "15 minutes",
    servings: "2"
  },
  {
    name: "Grilled Cheese Sandwich",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800",
    ingredients: ["4 slices bread", "Butter", "Cheddar cheese slices", "Mozzarella cheese", "Salt", "Black pepper"],
    steps: ["Butter one side of each bread slice", "Place cheese between bread", "Heat pan over medium heat", "Grill sandwich until golden", "Flip and grill other side", "Serve hot"],
    category: "sandwiches-wraps",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Chicken Tikka Wrap",
    image: "https://images.unsplash.com/photo-1551887373-6edba6dacbb1?w=800",
    ingredients: ["Chicken tikka pieces", "Tortillas", "Mint chutney", "Onions", "Cucumbers", "Tomatoes", "Lettuce", "Yogurt", "Chat masala"],
    steps: ["Warm tortillas", "Spread mint chutney", "Add chicken tikka pieces", "Layer with vegetables", "Sprinkle chat masala", "Roll tightly", "Secure and serve"],
    category: "sandwiches-wraps",
    prepTime: "15 minutes",
    servings: "2"
  },

  // DIPS & CHUTNEYS
  {
    name: "Mint Coriander Chutney",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["1 cup mint leaves", "1 cup coriander leaves", "2 green chilies", "1 inch ginger", "2 cloves garlic", "1 tsp roasted cumin", "Salt", "Lemon juice"],
    steps: ["Wash and clean mint and coriander", "Blend with chilies, ginger, garlic", "Add cumin and salt", "Add lemon juice gradually", "Blend to smooth paste", "Store in refrigerator"],
    category: "dips-chutneys",
    prepTime: "10 minutes",
    servings: "8-10"
  },
  {
    name: "Hummus",
    image: "https://images.unsplash.com/photo-1571197119669-c978bb857a7b?w=800",
    ingredients: ["1 cup cooked chickpeas", "1/4 cup tahini", "2 cloves garlic", "3 tbsp lemon juice", "2 tbsp olive oil", "1 tsp cumin", "Salt", "Water as needed"],
    steps: ["Drain chickpeas, reserve liquid", "Blend chickpeas until smooth", "Add tahini, garlic, lemon juice", "Add olive oil and cumin", "Season with salt", "Adjust consistency with water"],
    category: "dips-chutneys",
    prepTime: "15 minutes",
    servings: "6-8"
  },
  {
    name: "Coconut Chutney",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800",
    ingredients: ["1 cup fresh coconut", "2 green chilies", "1 inch ginger", "1 tsp roasted chana dal", "Salt", "Water", "Curry leaves", "Mustard seeds", "Oil"],
    steps: ["Grind coconut, chilies, ginger, chana dal", "Add water to make smooth paste", "Season with salt", "Heat oil, add mustard seeds", "Add curry leaves", "Pour tempering over chutney"],
    category: "dips-chutneys",
    prepTime: "15 minutes",
    servings: "6"
  },
  {
    name: "Tamarind Date Chutney",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    ingredients: ["1/2 cup tamarind paste", "1/2 cup dates", "1/4 cup jaggery", "1 tsp ginger powder", "1 tsp roasted cumin", "Red chili powder", "Salt", "Water"],
    steps: ["Soak dates until soft", "Boil tamarind with water", "Add dates and jaggery", "Add spices and salt", "Cook until thick", "Strain and cool", "Store in jar"],
    category: "dips-chutneys",
    prepTime: "30 minutes",
    servings: "10-12"
  },

  // BEVERAGES & MOCKTAILS
  {
    name: "Virgin Mojito",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800",
    ingredients: ["Fresh mint leaves", "2 tbsp lime juice", "2 tsp sugar", "Soda water", "Ice cubes", "Lime wedges for garnish"],
    steps: ["Muddle mint leaves with sugar", "Add lime juice", "Fill glass with ice", "Top with soda water", "Stir gently", "Garnish with mint and lime"],
    category: "beverages-mocktails",
    prepTime: "5 minutes",
    servings: "1"
  },
  {
    name: "Mango Lassi",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=800",
    ingredients: ["1 cup mango pulp", "1 cup yogurt", "1/4 cup milk", "2 tbsp sugar", "1/4 tsp cardamom powder", "Ice cubes", "Chopped pistachios"],
    steps: ["Blend mango pulp with yogurt", "Add milk and sugar", "Add cardamom powder", "Blend with ice", "Pour into glasses", "Garnish with pistachios"],
    category: "beverages-mocktails",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Watermelon Cooler",
    image: "https://images.unsplash.com/photo-1571068316344-075ad14ed1c6?w=800",
    ingredients: ["2 cups watermelon chunks", "1 tbsp lime juice", "1 tsp black salt", "1 tsp roasted cumin powder", "Fresh mint", "Ice cubes", "Soda water"],
    steps: ["Blend watermelon until smooth", "Strain the juice", "Add lime juice and spices", "Fill glasses with ice", "Pour watermelon juice", "Top with soda and mint"],
    category: "beverages-mocktails",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Iced Coffee Frappe",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800",
    ingredients: ["2 tbsp instant coffee", "2 tbsp sugar", "1/4 cup hot water", "1 cup cold milk", "Ice cubes", "Whipped cream", "Chocolate syrup"],
    steps: ["Dissolve coffee and sugar in hot water", "Let it cool completely", "Blend with cold milk and ice", "Pour into tall glasses", "Top with whipped cream", "Drizzle chocolate syrup"],
    category: "beverages-mocktails",
    prepTime: "10 minutes",
    servings: "2"
  },

  // KIDS SPECIAL
  {
    name: "Mini Pizza Bites",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Bread slices", "Pizza sauce", "Mozzarella cheese", "Vegetables (corn, bell peppers)", "Italian herbs", "Olive oil"],
    steps: ["Cut bread into small circles", "Brush with olive oil", "Spread pizza sauce", "Add vegetables and cheese", "Sprinkle herbs", "Bake until cheese melts"],
    category: "kids-special",
    prepTime: "20 minutes",
    servings: "4-6"
  },
  {
    name: "Banana Pancakes",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800",
    ingredients: ["2 ripe bananas", "2 eggs", "1/4 cup flour", "1 tsp vanilla", "1/2 tsp cinnamon", "Butter for cooking", "Honey for serving"],
    steps: ["Mash bananas in a bowl", "Beat in eggs", "Add flour, vanilla, cinnamon", "Heat pan with butter", "Pour small pancakes", "Cook until bubbles form", "Serve with honey"],
    category: "kids-special",
    prepTime: "15 minutes",
    servings: "3-4"
  },
  {
    name: "Veggie Nuggets",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800",
    ingredients: ["Mixed vegetables (carrots, peas, beans)", "2 potatoes", "Breadcrumbs", "Flour", "Egg", "Spices", "Oil for frying"],
    steps: ["Boil and mash vegetables with potatoes", "Add spices and mix well", "Shape into nuggets", "Dip in flour, egg, breadcrumbs", "Deep fry until golden", "Serve with ketchup"],
    category: "kids-special",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Chocolate Chip Cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800",
    ingredients: ["1 cup flour", "1/2 cup butter", "1/2 cup brown sugar", "1/4 cup white sugar", "1 egg", "1/2 tsp vanilla", "1/2 cup chocolate chips", "Baking soda"],
    steps: ["Cream butter and sugars", "Add egg and vanilla", "Mix in flour and baking soda", "Fold in chocolate chips", "Drop spoonfuls on baking sheet", "Bake at 350°F for 10-12 minutes"],
    category: "kids-special",
    prepTime: "25 minutes",
    servings: "12 cookies"
  },

  // PARTY STARTERS
  {
    name: "Paneer Tikka",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800",
    ingredients: ["250g paneer cubes", "1 cup yogurt", "Ginger-garlic paste", "Red chili powder", "Garam masala", "Kasuri methi", "Bell peppers", "Onions", "Oil"],
    steps: ["Cut paneer and vegetables", "Marinate in yogurt and spices", "Thread on skewers", "Grill or bake until charred", "Baste with oil", "Serve hot with chutney"],
    category: "party-starters",
    prepTime: "45 minutes",
    servings: "4-6"
  },
  {
    name: "Chicken Wings",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800",
    ingredients: ["1kg chicken wings", "Soy sauce", "Honey", "Garlic", "Ginger", "Red chili flakes", "Sesame oil", "Green onions", "Sesame seeds"],
    steps: ["Marinate wings in soy, honey, garlic", "Bake at 400°F for 25 minutes", "Flip wings halfway", "Brush with glaze", "Bake 10 more minutes", "Garnish with green onions"],
    category: "party-starters",
    prepTime: "1 hour",
    servings: "6-8"
  },
  {
    name: "Stuffed Mushrooms",
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800",
    ingredients: ["Large mushrooms", "Breadcrumbs", "Cheese", "Garlic", "Herbs", "Olive oil", "Salt", "Black pepper"],
    steps: ["Remove mushroom stems", "Chop stems finely", "Sauté with garlic", "Mix with breadcrumbs and cheese", "Stuff mushroom caps", "Bake until golden"],
    category: "party-starters",
    prepTime: "30 minutes",
    servings: "6"
  },
  {
    name: "Vegetable Spring Rolls",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    ingredients: ["Spring roll sheets", "Cabbage", "Carrots", "Bean sprouts", "Garlic", "Ginger", "Soy sauce", "Oil for frying", "Sweet chili sauce"],
    steps: ["Shred vegetables finely", "Stir-fry with garlic, ginger", "Season with soy sauce", "Cool the filling", "Wrap in spring roll sheets", "Deep fry until crispy"],
    category: "party-starters",
    prepTime: "40 minutes",
    servings: "8-10"
  },

  // QUICK & EASY
  {
    name: "Maggi Masala Noodles",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
    ingredients: ["2 packets Maggi noodles", "Masala packets", "Vegetables (onions, tomatoes)", "Green chilies", "Oil", "Water"],
    steps: ["Heat oil in pan", "Sauté vegetables", "Add water and bring to boil", "Add noodles and masala", "Cook for 2-3 minutes", "Serve hot"],
    category: "quick-easy",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Egg Fried Rice",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: ["2 cups cooked rice", "2 eggs", "Vegetables (carrots, peas)", "Soy sauce", "Garlic", "Green onions", "Oil", "Salt"],
    steps: ["Scramble eggs and set aside", "Heat oil, add garlic", "Add vegetables and stir-fry", "Add rice and mix", "Add soy sauce and eggs", "Garnish with green onions"],
    category: "quick-easy",
    prepTime: "15 minutes",
    servings: "2-3"
  },
  {
    name: "Cheese Quesadilla",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["Tortillas", "Cheese", "Bell peppers", "Onions", "Butter", "Salsa", "Sour cream"],
    steps: ["Sauté vegetables lightly", "Place cheese and vegetables on tortilla", "Cover with another tortilla", "Cook in buttered pan", "Flip when golden", "Cut and serve with salsa"],
    category: "quick-easy",
    prepTime: "10 minutes",
    servings: "2"
  },
  {
    name: "Masala Scrambled Eggs",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800",
    ingredients: ["4 eggs", "Onions", "Tomatoes", "Green chilies", "Turmeric", "Red chili powder", "Coriander leaves", "Oil", "Salt"],
    steps: ["Beat eggs with salt", "Heat oil, sauté onions", "Add tomatoes and spices", "Pour beaten eggs", "Scramble gently", "Garnish with coriander"],
    category: "quick-easy",
    prepTime: "10 minutes",
    servings: "2"
  },

  // LUNCH BOX
  {
    name: "Vegetable Paratha",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800",
    ingredients: ["2 cups wheat flour", "Mixed vegetables", "Spices", "Oil", "Water", "Salt"],
    steps: ["Knead soft dough", "Prepare vegetable filling", "Roll paratha with filling", "Cook on griddle with oil", "Pack when cool", "Serve with pickle"],
    category: "lunch-box",
    prepTime: "30 minutes",
    servings: "4"
  },
  {
    name: "Chicken Sandwich",
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=800",
    ingredients: ["Bread slices", "Cooked chicken", "Mayonnaise", "Lettuce", "Tomatoes", "Cucumber", "Cheese", "Salt", "Pepper"],
    steps: ["Shred cooked chicken", "Mix with mayonnaise", "Layer bread with chicken", "Add vegetables and cheese", "Season with salt, pepper", "Pack wrapped in foil"],
    category: "lunch-box",
    prepTime: "15 minutes",
    servings: "2"
  },
  {
    name: "Lemon Rice",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800",
    ingredients: ["2 cups cooked rice", "2 lemons", "Peanuts", "Green chilies", "Ginger", "Curry leaves", "Mustard seeds", "Turmeric", "Oil", "Salt"],
    steps: ["Heat oil, add mustard seeds", "Add peanuts, chilies, ginger", "Add curry leaves and turmeric", "Add rice and mix", "Add lemon juice", "Pack when cool"],
    category: "lunch-box",
    prepTime: "20 minutes",
    servings: "3-4"
  },
  {
    name: "Pasta Salad",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
    ingredients: ["2 cups cooked pasta", "Cherry tomatoes", "Cucumbers", "Bell peppers", "Olives", "Cheese cubes", "Olive oil", "Herbs", "Salt"],
    steps: ["Cook pasta and cool", "Chop vegetables", "Mix pasta with vegetables", "Add cheese and olives", "Dress with oil and herbs", "Chill before packing"],
    category: "lunch-box",
    prepTime: "25 minutes",
    servings: "3-4"
  },
  
  ]
