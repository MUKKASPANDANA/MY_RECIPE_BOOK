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
    name: "Prawn Biryani",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    ingredients: ["2 cups basmati rice", "500g prawns", "Coconut milk", "Curry leaves", "Mustard seeds", "Turmeric", "Red chili powder", "Garam masala", "Mint leaves", "Ghee"],
    steps: ["Clean and marinate prawns", "Cook prawns with spices", "Prepare rice with coconut milk", "Layer prawns and rice", "Garnish with herbs", "Cook on dum for 40 minutes"],
    category: "biryani",
    prepTime: "2 hours",
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
  },
  ]
