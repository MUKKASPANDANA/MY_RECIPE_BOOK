import { Recipe } from '@/types/Recipe';

export const sampleRecipes: Omit<Recipe, 'id'>[] = [
  // Pickles (5 recipes)
  {
    name: "Mango Pickle",
    category: "pickles",
    ingredients: ["2 cups raw mango pieces", "1/4 cup mustard oil", "2 tsp mustard seeds", "1 tsp fenugreek seeds", "2 tsp red chili powder", "1 tsp turmeric", "Salt to taste"],
    steps: ["Cut mangoes into small pieces", "Mix all dry spices", "Heat mustard oil and add mustard seeds", "Add mango pieces and spices", "Mix well and store in jar"],
    prepTime: "30 minutes",
    servings: "4-6 people",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop"
  },
  {
    name: "Lemon Pickle",
    category: "pickles",
    ingredients: ["10 lemons", "1/4 cup salt", "2 tsp turmeric", "2 tsp red chili powder", "1 tsp asafoetida", "2 tbsp mustard oil"],
    steps: ["Cut lemons into quarters", "Mix with salt and spices", "Add mustard oil", "Store in airtight jar", "Leave for 7 days to ferment"],
    prepTime: "20 minutes",
    servings: "6-8 people",
    image: "https://images.unsplash.com/photo-1587735243475-46b5b8dd9169?w=400&h=300&fit=crop"
  },
  {
    name: "Mixed Vegetable Pickle",
    category: "pickles",
    ingredients: ["1 cup carrots", "1 cup cauliflower", "1/2 cup green beans", "3 tbsp mustard oil", "2 tsp mustard seeds", "2 tsp red chili powder", "1 tsp turmeric", "Salt to taste"],
    steps: ["Chop all vegetables", "Boil vegetables lightly", "Heat oil and add mustard seeds", "Add vegetables and spices", "Cook for 10 minutes", "Store in jar"],
    prepTime: "45 minutes",
    servings: "4-6 people",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop"
  },
  {
    name: "Garlic Pickle",
    category: "pickles",
    ingredients: ["2 cups garlic cloves", "3 tbsp mustard oil", "2 tsp mustard seeds", "1 tsp fenugreek seeds", "2 tsp red chili powder", "1 tsp turmeric", "Salt to taste"],
    steps: ["Peel garlic cloves", "Heat oil and add seeds", "Add garlic and spices", "Cook until golden", "Cool and store"],
    prepTime: "25 minutes",
    servings: "4-6 people",
    image: "https://images.unsplash.com/photo-1593348443020-8c0e16d7e88e?w=400&h=300&fit=crop"
  },
  {
    name: "Green Chili Pickle",
    category: "pickles",
    ingredients: ["500g green chilies", "2 tbsp mustard oil", "1 tsp mustard seeds", "1 tsp nigella seeds", "1 tsp turmeric", "2 tsp coriander powder", "Salt to taste"],
    steps: ["Wash and dry chilies", "Slit chilies lengthwise", "Heat oil and add seeds", "Add chilies and spices", "Cook for 5 minutes", "Store in jar"],
    prepTime: "15 minutes",
    servings: "6-8 people",
    image: "https://images.unsplash.com/photo-1583827132795-68b67b61e1b8?w=400&h=300&fit=crop"
  },

  // Fried Rice (5 recipes)
  {
    name: "Vegetable Fried Rice",
    category: "fried-rice",
    ingredients: ["2 cups cooked rice", "1 cup mixed vegetables", "2 eggs", "3 tbsp oil", "2 cloves garlic", "1 tbsp soy sauce", "1 tsp sesame oil", "Salt to taste"],
    steps: ["Heat oil in wok", "Scramble eggs and set aside", "Stir-fry vegetables", "Add rice and soy sauce", "Mix in eggs", "Garnish and serve"],
    prepTime: "20 minutes",
    servings: "3-4 people",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop"
  },
  {
    name: "Chicken Fried Rice",
    category: "fried-rice",
    ingredients: ["2 cups cooked rice", "1 cup cooked chicken", "2 eggs", "1/2 cup peas", "3 tbsp oil", "2 cloves garlic", "2 tbsp soy sauce", "1 tsp sesame oil"],
    steps: ["Heat oil in pan", "Scramble eggs", "Add garlic and chicken", "Add rice and vegetables", "Season with soy sauce", "Serve hot"],
    prepTime: "25 minutes",
    servings: "3-4 people",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop"
  },
  {
    name: "Shrimp Fried Rice",
    category: "fried-rice",
    ingredients: ["2 cups cooked rice", "300g shrimp", "2 eggs", "1/2 cup carrots", "3 tbsp oil", "2 cloves garlic", "2 tbsp soy sauce", "Green onions"],
    steps: ["Clean and cook shrimp", "Scramble eggs", "Stir-fry vegetables", "Add rice and shrimp", "Season well", "Garnish with green onions"],
    prepTime: "30 minutes",
    servings: "3-4 people",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop"
  },
  {
    name: "Thai Pineapple Fried Rice",
    category: "fried-rice",
    ingredients: ["2 cups jasmine rice", "1 cup pineapple chunks", "200g shrimp", "2 eggs", "1/4 cup cashews", "2 tbsp fish sauce", "1 tbsp curry powder", "Thai basil"],
    steps: ["Cook rice and cool", "Stir-fry shrimp", "Scramble eggs", "Add rice and curry powder", "Mix in pineapple", "Garnish with cashews and basil"],
    prepTime: "35 minutes",
    servings: "4 people",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop"
  },
  {
    name: "Kimchi Fried Rice",
    category: "fried-rice",
    ingredients: ["2 cups cooked rice", "1 cup kimchi", "2 eggs", "2 tbsp kimchi juice", "1 tbsp sesame oil", "2 tbsp vegetable oil", "2 green onions", "Sesame seeds"],
    steps: ["Heat oil in pan", "Stir-fry kimchi", "Add rice and kimchi juice", "Create well for eggs", "Scramble eggs in well", "Mix everything together", "Garnish and serve"],
    prepTime: "15 minutes",
    servings: "2-3 people",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop"
  },

  // Chinese Food (5 recipes)
  {
    name: "Sweet and Sour Chicken",
    category: "chinese",
    ingredients: ["500g chicken breast", "1 bell pepper", "1 onion", "1/2 cup pineapple", "3 tbsp ketchup", "2 tbsp vinegar", "2 tbsp sugar", "1 tbsp cornstarch"],
    steps: ["Cut chicken into pieces", "Marinate and fry chicken", "Stir-fry vegetables", "Make sweet and sour sauce", "Combine everything", "Serve with rice"],
    prepTime: "40 minutes",
    servings: "4 people",
    image: "https://images.unsplash.com/photo-1559847844-d1f6d9fd1595?w=400&h=300&fit=crop"
  },
  {
    name: "Kung Pao Chicken",
    category: "chinese",
    ingredients: ["500g chicken thigh", "1/2 cup peanuts", "6 dried chilies", "3 cloves garlic", "2 tbsp soy sauce", "1 tbsp rice wine", "1 tsp sugar", "2 tbsp cornstarch"],
    steps: ["Marinate chicken pieces", "Roast peanuts", "Heat oil and fry chilies", "Add chicken and cook", "Add sauce ingredients", "Garnish with peanuts"],
    prepTime: "30 minutes",
    servings: "3-4 people",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop"
  },
  {
    name: "Mapo Tofu",
    category: "chinese",
    ingredients: ["400g silken tofu", "100g ground pork", "2 tbsp doubanjiang", "2 cloves garlic", "1 tsp ginger", "2 tbsp soy sauce", "1 tsp Sichuan peppercorns", "Green onions"],
    steps: ["Cut tofu into cubes", "Cook ground pork", "Add garlic and ginger", "Add doubanjiang sauce", "Add tofu gently", "Simmer and serve"],
    prepTime: "25 minutes",
    servings: "2-3 people",
    image: "https://images.unsplash.com/photo-1582878825012-c23c78c6d4ea?w=400&h=300&fit=crop"
  },
  {
    name: "Chow Mein",
    category: "chinese",
    ingredients: ["300g egg noodles", "1 cup cabbage", "1 carrot", "1 bell pepper", "2 tbsp soy sauce", "1 tbsp oyster sauce", "2 tbsp oil", "2 cloves garlic"],
    steps: ["Cook noodles and drain", "Heat oil in wok", "Stir-fry vegetables", "Add noodles", "Add sauces", "Toss everything together"],
    prepTime: "20 minutes",
    servings: "3-4 people",
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&h=300&fit=crop"
  },
  {
    name: "General Tso's Chicken",
    category: "chinese",
    ingredients: ["500g chicken thigh", "1/2 cup cornstarch", "3 tbsp soy sauce", "3 tbsp rice vinegar", "4 tbsp sugar", "2 tbsp ketchup", "1 tsp ginger", "3 cloves garlic"],
    steps: ["Cut and marinate chicken", "Coat with cornstarch", "Deep fry chicken", "Make sauce in wok", "Add fried chicken to sauce", "Garnish and serve"],
    prepTime: "45 minutes",
    servings: "4 people",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop"
  },

  // Curries (5 recipes)
  {
    name: "Butter Chicken",
    category: "curries",
    ingredients: ["500g chicken", "1 cup tomato puree", "1/2 cup cream", "2 tbsp butter", "1 onion", "3 cloves garlic", "1 tsp garam masala", "1 tsp cumin", "Salt to taste"],
    steps: ["Marinate chicken with spices", "Cook chicken pieces", "Sauté onions and garlic", "Add tomato puree", "Add cream and butter", "Simmer with chicken"],
    prepTime: "45 minutes",
    servings: "4 people",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop"
  },
  {
    name: "Chickpea Curry",
    category: "curries",
    ingredients: ["2 cups cooked chickpeas", "1 onion", "2 tomatoes", "3 cloves garlic", "1 tsp ginger", "1 tsp cumin", "1 tsp coriander powder", "1/2 tsp turmeric"],
    steps: ["Sauté onions until golden", "Add garlic and ginger", "Add tomatoes and spices", "Add chickpeas", "Simmer for 15 minutes", "Garnish with cilantro"],
    prepTime: "30 minutes",
    servings: "4 people",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop"
  },
  {
    name: "Thai Green Curry",
    category: "curries",
    ingredients: ["400ml coconut milk", "2 tbsp green curry paste", "300g chicken", "1 eggplant", "1 bell pepper", "Thai basil", "2 tbsp fish sauce", "1 tbsp palm sugar"],
    steps: ["Heat coconut milk", "Add curry paste", "Add chicken and cook", "Add vegetables", "Season with fish sauce and sugar", "Garnish with basil"],
    prepTime: "35 minutes",
    servings: "3-4 people",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop"
  },
  {
    name: "Fish Curry",
    category: "curries",
    ingredients: ["500g fish fillets", "400ml coconut milk", "2 tbsp curry powder", "1 onion", "3 tomatoes", "2 tsp ginger-garlic paste", "2 green chilies", "Curry leaves"],
    steps: ["Marinate fish with turmeric", "Sauté onions and spices", "Add tomatoes", "Add coconut milk", "Add fish pieces", "Simmer until cooked"],
    prepTime: "40 minutes",
    servings: "4 people",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop"
  },
  {
    name: "Lamb Rogan Josh",
    category: "curries",
    ingredients: ["750g lamb", "1 cup yogurt", "2 onions", "4 tomatoes", "2 tsp ginger-garlic paste", "2 tsp red chili powder", "1 tsp garam masala", "2 bay leaves"],
    steps: ["Marinate lamb in yogurt", "Brown meat pieces", "Sauté onions until golden", "Add spices and tomatoes", "Add meat back", "Slow cook for 1 hour"],
    prepTime: "90 minutes",
    servings: "4-6 people",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop"
  },

  // Other recipes (10 recipes)
  {
    name: "Caesar Salad",
    category: "other",
    ingredients: ["1 head romaine lettuce", "1/2 cup parmesan cheese", "1/4 cup croutons", "2 tbsp Caesar dressing", "1 lemon", "Black pepper"],
    steps: ["Wash and chop lettuce", "Make croutons", "Prepare dressing", "Toss everything together", "Add cheese and pepper", "Serve immediately"],
    prepTime: "15 minutes",
    servings: "2-3 people",
    image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?w=400&h=300&fit=crop"
  },
  {
    name: "Chocolate Chip Cookies",
    category: "other",
    ingredients: ["2 cups flour", "1 cup butter", "3/4 cup brown sugar", "1/2 cup white sugar", "2 eggs", "1 tsp vanilla", "1 tsp baking soda", "1 cup chocolate chips"],
    steps: ["Cream butter and sugars", "Add eggs and vanilla", "Mix in dry ingredients", "Fold in chocolate chips", "Bake at 375°F for 10 minutes", "Cool on rack"],
    prepTime: "30 minutes",
    servings: "24 cookies",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop"
  },
  {
    name: "Margherita Pizza",
    category: "other",
    ingredients: ["1 pizza dough", "1/2 cup tomato sauce", "200g mozzarella", "Fresh basil", "2 tbsp olive oil", "Salt", "Black pepper"],
    steps: ["Roll out pizza dough", "Spread tomato sauce", "Add mozzarella cheese", "Bake at 475°F for 12 minutes", "Add fresh basil", "Drizzle with olive oil"],
    prepTime: "25 minutes",
    servings: "2-3 people",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop"
  },
  {
    name: "Greek Salad",
    category: "other",
    ingredients: ["2 cucumbers", "4 tomatoes", "1 red onion", "200g feta cheese", "1/2 cup olives", "3 tbsp olive oil", "2 tbsp lemon juice", "Oregano"],
    steps: ["Chop vegetables", "Add feta and olives", "Whisk oil and lemon", "Toss with dressing", "Season with oregano", "Serve fresh"],
    prepTime: "15 minutes",
    servings: "4 people",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop"
  },
  {
    name: "Beef Tacos",
    category: "other",
    ingredients: ["500g ground beef", "8 taco shells", "1 lettuce", "2 tomatoes", "1 cup cheese", "1 onion", "1 tsp cumin", "1 tsp chili powder", "Sour cream"],
    steps: ["Cook ground beef with spices", "Warm taco shells", "Prepare toppings", "Fill shells with meat", "Add toppings", "Serve immediately"],
    prepTime: "20 minutes",
    servings: "4 people",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop"
  },
  {
    name: "Spaghetti Carbonara",
    category: "other",
    ingredients: ["400g spaghetti", "200g pancetta", "4 eggs", "1 cup parmesan", "2 cloves garlic", "Black pepper", "Salt", "2 tbsp olive oil"],
    steps: ["Cook spaghetti al dente", "Fry pancetta until crispy", "Whisk eggs with cheese", "Combine hot pasta with pancetta", "Add egg mixture off heat", "Toss quickly and serve"],
    prepTime: "25 minutes",
    servings: "4 people",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop"
  },
  {
    name: "Chicken Quesadilla",
    category: "other",
    ingredients: ["4 tortillas", "300g cooked chicken", "2 cups cheese", "1 bell pepper", "1 onion", "2 tbsp oil", "Salsa", "Sour cream"],
    steps: ["Cook vegetables", "Shred cooked chicken", "Layer ingredients on tortilla", "Top with another tortilla", "Cook until golden", "Cut and serve with salsa"],
    prepTime: "20 minutes",
    servings: "2-3 people",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
  },
  {
    name: "Mushroom Risotto",
    category: "other",
    ingredients: ["1 cup arborio rice", "300g mushrooms", "4 cups warm broth", "1 onion", "1/2 cup white wine", "2 tbsp butter", "1/2 cup parmesan", "2 tbsp olive oil"],
    steps: ["Sauté mushrooms", "Cook onion until soft", "Add rice and toast", "Add wine and stir", "Add broth gradually", "Finish with butter and cheese"],
    prepTime: "40 minutes",
    servings: "3-4 people",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop"
  },
  {
    name: "French Toast",
    category: "other",
    ingredients: ["8 thick bread slices", "4 eggs", "1/2 cup milk", "2 tbsp sugar", "1 tsp vanilla", "1/2 tsp cinnamon", "Butter", "Maple syrup"],
    steps: ["Whisk eggs, milk, and spices", "Dip bread in mixture", "Cook in buttered pan", "Flip when golden", "Serve with syrup", "Dust with powdered sugar"],
    prepTime: "15 minutes",
    servings: "4 people",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop"
  },
  {
    name: "Vegetable Stir Fry",
    category: "other",
    ingredients: ["2 cups mixed vegetables", "2 tbsp soy sauce", "1 tbsp sesame oil", "2 cloves garlic", "1 tsp ginger", "2 tbsp vegetable oil", "1 tsp cornstarch", "Green onions"],
    steps: ["Heat oil in wok", "Add garlic and ginger", "Stir-fry vegetables", "Add soy sauce", "Thicken with cornstarch", "Garnish with green onions"],
    prepTime: "15 minutes",
    servings: "3-4 people",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  }
];
