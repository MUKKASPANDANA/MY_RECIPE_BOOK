
import { Recipe } from '@/types/Recipe';

export const sampleRecipes: Omit<Recipe, 'id'>[] = [
  // Biryani (5 recipes)
  {
    name: "Chicken Biryani",
    category: "biryani",
    ingredients: [
      "2 cups basmati rice",
      "500g chicken (cut into pieces)",
      "2 large onions (sliced)",
      "1 cup yogurt",
      "2 tsp ginger-garlic paste",
      "1 tsp red chili powder",
      "1/2 tsp turmeric",
      "1 tsp garam masala",
      "Few saffron strands",
      "4 tbsp ghee",
      "Salt to taste"
    ],
    steps: [
      "Soak basmati rice for 30 minutes",
      "Marinate chicken with yogurt, ginger-garlic paste, and spices for 1 hour",
      "Deep fry onions until golden brown and crispy",
      "Cook marinated chicken until 70% done",
      "Boil rice with whole spices until 70% cooked",
      "Layer rice and chicken alternately in a heavy-bottomed pot",
      "Sprinkle fried onions, saffron soaked in milk, and ghee on top",
      "Cover with aluminum foil, then place lid and cook on high heat for 3 minutes",
      "Reduce heat to low and cook for 45 minutes",
      "Let it rest for 10 minutes before serving"
    ],
    prepTime: "2 hours",
    servings: "4-6 people"
  },
  {
    name: "Mutton Biryani",
    category: "biryani",
    ingredients: [
      "2 cups basmati rice",
      "750g mutton (cut into pieces)",
      "3 onions (sliced)",
      "1 cup yogurt",
      "2 tbsp ginger-garlic paste",
      "2 tsp red chili powder",
      "1 tsp turmeric",
      "2 tsp garam masala",
      "1/4 cup mint leaves",
      "1/4 cup coriander leaves",
      "Saffron soaked in milk",
      "5 tbsp ghee"
    ],
    steps: [
      "Wash and soak rice for 30 minutes",
      "Marinate mutton with yogurt, ginger-garlic paste, and spices for 2 hours",
      "Fry onions until golden and crispy, reserve oil",
      "Cook marinated mutton in pressure cooker for 15 minutes",
      "Boil rice with whole spices until 80% done",
      "In a heavy pot, layer half rice, then mutton, then remaining rice",
      "Top with fried onions, mint, coriander, saffron milk and ghee",
      "Cover tightly and cook on dum for 1 hour",
      "Rest for 15 minutes before opening",
      "Gently mix and serve hot with raita"
    ],
    prepTime: "3 hours",
    servings: "6-8 people"
  },
  {
    name: "Vegetable Biryani",
    category: "biryani",
    ingredients: [
      "2 cups basmati rice",
      "200g mixed vegetables (carrots, beans, peas)",
      "200g paneer (cubed)",
      "2 onions (sliced)",
      "1/2 cup yogurt",
      "1 tsp ginger-garlic paste",
      "1 tsp red chili powder",
      "1/2 tsp turmeric",
      "1 tsp garam masala",
      "1/4 cup cashews",
      "1/4 cup raisins",
      "Saffron and milk",
      "4 tbsp ghee"
    ],
    steps: [
      "Soak rice for 30 minutes, then drain",
      "Cut vegetables into medium pieces",
      "Fry paneer cubes until golden, set aside",
      "Fry onions until golden brown",
      "Sauté vegetables until half cooked",
      "Boil rice with whole spices until 70% done",
      "Layer rice and vegetables alternately",
      "Add fried paneer, onions, nuts and saffron milk",
      "Cover and cook on dum for 40 minutes",
      "Garnish with fresh herbs and serve"
    ],
    prepTime: "1.5 hours",
    servings: "4-5 people"
  },
  {
    name: "Hyderabadi Biryani",
    category: "biryani",
    ingredients: [
      "3 cups basmati rice",
      "1 kg goat meat",
      "4 onions (sliced)",
      "1 cup yogurt",
      "3 tbsp ginger-garlic paste",
      "2 tsp red chili powder",
      "1 tsp turmeric",
      "2 tsp garam masala",
      "Kewra water",
      "Rose water",
      "Saffron",
      "6 tbsp ghee",
      "Whole spices"
    ],
    steps: [
      "Marinate meat with yogurt and spices for 4 hours",
      "Deep fry onions until dark brown",
      "Cook meat in its own juices until tender",
      "Boil rice with whole spices until 75% done",
      "Heat ghee in heavy-bottomed pot",
      "Layer rice and meat alternately",
      "Sprinkle fried onions, kewra, rose water and saffron",
      "Seal pot with dough around the lid",
      "Cook on high for 5 minutes, then low for 2 hours",
      "Let it rest before opening and serving"
    ],
    prepTime: "4 hours",
    servings: "8-10 people"
  },
  {
    name: "Fish Biryani",
    category: "biryani",
    ingredients: [
      "2 cups basmati rice",
      "500g fish fillets (cut into pieces)",
      "2 onions (sliced)",
      "1 cup coconut milk",
      "2 tbsp ginger-garlic paste",
      "2 tsp red chili powder",
      "1 tsp turmeric",
      "1 tsp coriander powder",
      "10-12 curry leaves",
      "2 green chilies",
      "3 tbsp coconut oil",
      "Salt to taste"
    ],
    steps: [
      "Clean and marinate fish with turmeric and salt for 30 minutes",
      "Shallow fry fish pieces until golden, set aside",
      "Fry onions until brown",
      "Make fish curry with coconut milk and spices",
      "Add fried fish to the curry",
      "Boil rice until 80% done",
      "Layer rice and fish curry in a pot",
      "Cook on dum for 30 minutes",
      "Garnish with curry leaves and serve",
      "Serve hot with pickle and papad"
    ],
    prepTime: "2 hours",
    servings: "4 people"
  },

  // Fried Rice (5 recipes)
  {
    name: "Chicken Fried Rice",
    category: "fried-rice",
    ingredients: [
      "3 cups cooked rice (preferably day-old)",
      "300g chicken breast (diced)",
      "3 eggs (beaten)",
      "1 cup mixed vegetables (carrots, peas, beans)",
      "3 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "2 cloves garlic (minced)",
      "1 inch ginger (minced)",
      "3 spring onions (chopped)",
      "3 tbsp oil",
      "Salt and pepper to taste"
    ],
    steps: [
      "Heat oil in a large wok or pan",
      "Scramble eggs and remove from pan",
      "Cook chicken pieces until fully done",
      "Add garlic and ginger, stir for 1 minute",
      "Add vegetables and stir-fry for 3 minutes",
      "Add rice and break up any clumps",
      "Add soy sauce and oyster sauce",
      "Return scrambled eggs to the pan",
      "Garnish with spring onions",
      "Serve hot immediately"
    ],
    prepTime: "30 minutes",
    servings: "3-4 people"
  },
  {
    name: "Vegetable Fried Rice",
    category: "fried-rice",
    ingredients: [
      "3 cups cooked rice",
      "1 cup mixed vegetables (carrots, peas, bell peppers, corn)",
      "3 cloves garlic (minced)",
      "1 inch ginger (minced)",
      "3 tbsp soy sauce",
      "1 tbsp sesame oil",
      "2 tbsp vegetable oil",
      "3 spring onions (chopped)",
      "1 tsp black pepper",
      "Salt to taste"
    ],
    steps: [
      "Heat oil in a wok over high heat",
      "Add garlic and ginger, stir for 30 seconds",
      "Add mixed vegetables and stir-fry for 4 minutes",
      "Add cooked rice and mix well",
      "Add soy sauce and sesame oil",
      "Stir-fry for 3-4 minutes",
      "Season with salt and pepper",
      "Add spring onions and toss",
      "Remove from heat and serve",
      "Garnish with additional spring onions"
    ],
    prepTime: "20 minutes",
    servings: "2-3 people"
  },
  {
    name: "Thai Fried Rice",
    category: "fried-rice",
    ingredients: [
      "3 cups jasmine rice (cooked and cooled)",
      "2 tbsp fish sauce",
      "2 tbsp palm sugar or brown sugar",
      "2 tbsp tamarind paste",
      "3 cloves garlic (minced)",
      "2 Thai chilies (chopped)",
      "1/4 cup Thai basil leaves",
      "2 eggs",
      "2 tbsp vegetable oil",
      "Lime wedges for serving",
      "Cucumber slices for garnish"
    ],
    steps: [
      "Mix fish sauce, palm sugar, and tamarind paste",
      "Heat oil in wok over high heat",
      "Add garlic and chilies, stir for 30 seconds",
      "Add rice and stir-fry for 3 minutes",
      "Push rice to one side, scramble eggs",
      "Mix eggs with rice",
      "Add sauce mixture and toss well",
      "Add Thai basil and stir briefly",
      "Remove from heat immediately",
      "Serve with lime wedges and cucumber"
    ],
    prepTime: "20 minutes",
    servings: "2-3 people"
  },
  {
    name: "Kimchi Fried Rice",
    category: "fried-rice",
    ingredients: [
      "3 cups cooked rice",
      "1 cup kimchi (chopped)",
      "2 tbsp kimchi juice",
      "200g pork belly or bacon (diced)",
      "2 eggs",
      "2 cloves garlic (minced)",
      "2 tbsp sesame oil",
      "2 tbsp soy sauce",
      "1 tbsp gochujang (Korean chili paste)",
      "2 spring onions (chopped)",
      "1 sheet nori (cut into strips)"
    ],
    steps: [
      "Cook pork belly until crispy and fat renders",
      "Add garlic and stir for 1 minute",
      "Add kimchi and cook for 3 minutes",
      "Add rice and kimchi juice",
      "Mix in gochujang and soy sauce",
      "Stir-fry for 5 minutes until rice is heated",
      "Push rice aside, fry eggs sunny-side up",
      "Drizzle sesame oil over rice",
      "Top with fried egg and nori strips",
      "Garnish with spring onions and serve"
    ],
    prepTime: "20 minutes",
    servings: "2 people"
  },
  {
    name: "Shrimp Fried Rice",
    category: "fried-rice",
    ingredients: [
      "3 cups cooked rice",
      "300g shrimp (peeled and deveined)",
      "3 eggs (beaten)",
      "1/2 cup green peas",
      "1/2 cup carrots (diced)",
      "3 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "2 cloves garlic (minced)",
      "3 tbsp oil",
      "2 spring onions (chopped)",
      "1 tsp sesame oil"
    ],
    steps: [
      "Season shrimp with salt and pepper",
      "Heat oil in wok, cook shrimp until pink",
      "Remove shrimp and set aside",
      "Scramble eggs in the same wok",
      "Add garlic, carrots, and peas",
      "Stir-fry vegetables for 3 minutes",
      "Add rice and break up clumps",
      "Return shrimp to wok",
      "Add soy sauce, oyster sauce, and sesame oil",
      "Garnish with spring onions and serve hot"
    ],
    prepTime: "25 minutes",
    servings: "3 people"
  },

  // Pickles (5 recipes)
  {
    name: "Mango Pickle",
    category: "pickles",
    ingredients: [
      "1 kg raw mangoes",
      "200g mustard oil",
      "100g red chili powder",
      "50g turmeric powder",
      "100g salt",
      "50g fenugreek powder",
      "25g asafoetida",
      "50g mustard seeds (coarsely ground)",
      "25g nigella seeds",
      "10-12 garlic cloves",
      "2 inch ginger piece"
    ],
    steps: [
      "Wash and dry mangoes completely",
      "Cut mangoes into small pieces, remove seeds",
      "Mix mango pieces with salt and turmeric",
      "Leave overnight to release water",
      "Drain excess water the next day",
      "Heat mustard oil until smoking, then cool",
      "Mix all spices with cooled oil",
      "Add mango pieces and mix well",
      "Store in clean glass jar",
      "Ready to eat after 3-4 days"
    ],
    prepTime: "30 minutes",
    servings: "Makes 1 kg jar"
  },
  {
    name: "Lemon Pickle",
    category: "pickles",
    ingredients: [
      "500g lemons",
      "100g salt",
      "50g turmeric powder",
      "100g red chili powder",
      "25g asafoetida",
      "50g mustard seeds (coarsely ground)",
      "25g fenugreek powder",
      "100ml mustard oil",
      "10 garlic cloves",
      "1 inch ginger",
      "15-20 green chilies"
    ],
    steps: [
      "Wash lemons and dry completely",
      "Cut each lemon into 8 pieces",
      "Mix lemon pieces with salt",
      "Keep in sun for 2-3 days until soft",
      "Heat oil until smoking, then cool",
      "Mix all dry spices together",
      "Add spice mixture to lemons",
      "Pour cooled oil and mix well",
      "Store in sterilized glass jar",
      "Ready in 1 week, improves with age"
    ],
    prepTime: "20 minutes",
    servings: "Makes 1 jar"
  },
  {
    name: "Garlic Pickle",
    category: "pickles",
    ingredients: [
      "500g garlic cloves",
      "100g mustard oil",
      "50g red chili powder",
      "25g turmeric powder",
      "50g salt",
      "25g fenugreek powder",
      "15g asafoetida",
      "25g mustard seeds (ground)",
      "2 tbsp vinegar",
      "10 green chilies",
      "1 inch ginger"
    ],
    steps: [
      "Peel garlic cloves and dry them",
      "Slit green chilies lengthwise",
      "Chop ginger into small pieces",
      "Heat oil until smoking, cool completely",
      "Mix all dry spices in a bowl",
      "Add garlic, chilies, and ginger",
      "Add vinegar and mix well",
      "Pour cooled oil and combine",
      "Store in clean dry jar",
      "Pickle ready in 2-3 days"
    ],
    prepTime: "25 minutes",
    servings: "Makes 1 jar"
  },
  {
    name: "Mixed Vegetable Pickle",
    category: "pickles",
    ingredients: [
      "250g cauliflower florets",
      "250g carrots (cut into sticks)",
      "250g turnips (cut into pieces)",
      "100g green chilies",
      "150g mustard oil",
      "75g red chili powder",
      "25g turmeric",
      "75g salt",
      "50g mustard seeds (ground)",
      "25g fenugreek powder",
      "15g asafoetida"
    ],
    steps: [
      "Wash all vegetables and dry completely",
      "Cut vegetables into uniform pieces",
      "Blanch vegetables in salted water for 2 minutes",
      "Drain and dry vegetables thoroughly",
      "Heat oil until smoking, then cool",
      "Mix all spices together",
      "Toss vegetables with spice mixture",
      "Add cooled oil and mix well",
      "Pack in sterilized jars",
      "Ready to eat in 3-4 days"
    ],
    prepTime: "45 minutes",
    servings: "Makes 2 jars"
  },
  {
    name: "Green Chili Pickle",
    category: "pickles",
    ingredients: [
      "500g green chilies",
      "100g mustard seeds",
      "50g fennel seeds",
      "100g mustard oil",
      "50g salt",
      "25g turmeric",
      "25g asafoetida",
      "3 tbsp vinegar",
      "15 garlic cloves",
      "2 inch ginger piece",
      "1 tsp nigella seeds"
    ],
    steps: [
      "Wash chilies and make a slit in each",
      "Dry roast mustard and fennel seeds",
      "Grind roasted seeds coarsely",
      "Chop garlic and ginger finely",
      "Heat oil until smoking, cool completely",
      "Mix chilies with salt and turmeric",
      "Add ground seeds, garlic, and ginger",
      "Sprinkle asafoetida and nigella seeds",
      "Add vinegar and oil, mix well",
      "Store in glass jar, ready in 2 days"
    ],
    prepTime: "15 minutes",
    servings: "Makes 1 jar"
  },

  // Shakes (5 recipes)
  {
    name: "Mango Shake",
    category: "shakes",
    ingredients: [
      "2 ripe mangoes",
      "1 cup chilled milk",
      "3 tbsp sugar (or to taste)",
      "1/2 cup ice cubes",
      "1/4 tsp cardamom powder",
      "2 tbsp vanilla ice cream (optional)",
      "Few saffron strands",
      "Chopped nuts for garnish"
    ],
    steps: [
      "Peel and chop mangoes into pieces",
      "Add mangoes to blender",
      "Pour chilled milk and add sugar",
      "Add cardamom powder and saffron",
      "Add ice cubes and ice cream if using",
      "Blend until smooth and frothy",
      "Taste and adjust sweetness",
      "Pour into glasses",
      "Garnish with chopped nuts",
      "Serve immediately with a straw"
    ],
    prepTime: "10 minutes",
    servings: "2 glasses"
  },
  {
    name: "Chocolate Shake",
    category: "shakes",
    ingredients: [
      "2 cups chilled milk",
      "4 tbsp chocolate syrup",
      "3 scoops vanilla ice cream",
      "2 tbsp cocoa powder",
      "2 tbsp sugar",
      "1/2 cup ice cubes",
      "Whipped cream for topping",
      "Chocolate chips for garnish",
      "1 tsp vanilla extract"
    ],
    steps: [
      "Add milk and chocolate syrup to blender",
      "Add vanilla ice cream and cocoa powder",
      "Add sugar and vanilla extract",
      "Add ice cubes for extra chill",
      "Blend on high speed for 2 minutes",
      "Check consistency and blend more if needed",
      "Pour into tall glasses",
      "Top with whipped cream",
      "Sprinkle chocolate chips on top",
      "Serve with a straw and spoon"
    ],
    prepTime: "5 minutes",
    servings: "2 glasses"
  },
  {
    name: "Banana Milkshake",
    category: "shakes",
    ingredients: [
      "3 ripe bananas",
      "1.5 cups chilled milk",
      "3 tbsp honey",
      "1/4 cup almonds (soaked)",
      "1/2 cup ice cubes",
      "1/4 tsp cinnamon powder",
      "2 tbsp oats (optional)",
      "Chopped nuts for garnish",
      "1 tsp vanilla extract"
    ],
    steps: [
      "Peel and slice bananas",
      "Soak almonds for 15 minutes, then peel",
      "Add bananas and almonds to blender",
      "Pour chilled milk and add honey",
      "Add vanilla extract and cinnamon",
      "Add oats if using for thickness",
      "Add ice cubes and blend until smooth",
      "Pour into glasses",
      "Garnish with chopped nuts",
      "Serve fresh for best taste"
    ],
    prepTime: "5 minutes",
    servings: "2 glasses"
  },
  {
    name: "Strawberry Shake",
    category: "shakes",
    ingredients: [
      "1 cup fresh strawberries (hulled)",
      "1 cup chilled milk",
      "3 tbsp sugar",
      "2 scoops vanilla ice cream",
      "1/2 cup ice cubes",
      "1 tsp vanilla extract",
      "2 tbsp whipped cream",
      "Fresh strawberry for garnish",
      "Mint leaves for decoration"
    ],
    steps: [
      "Wash and hull fresh strawberries",
      "Add strawberries to blender",
      "Pour chilled milk and add sugar",
      "Add vanilla ice cream and extract",
      "Add ice cubes for chill factor",
      "Blend until smooth and pink",
      "Taste and adjust sweetness",
      "Pour into chilled glasses",
      "Top with whipped cream",
      "Garnish with strawberry and mint"
    ],
    prepTime: "8 minutes",
    servings: "2 glasses"
  },
  {
    name: "Oreo Shake",
    category: "shakes",
    ingredients: [
      "6 Oreo cookies",
      "1 cup chilled milk",
      "2 scoops vanilla ice cream",
      "2 tbsp chocolate syrup",
      "1/2 cup ice cubes",
      "Whipped cream for topping",
      "2 Oreo cookies for garnish",
      "Chocolate sauce for drizzling"
    ],
    steps: [
      "Separate Oreo cookies and cream",
      "Crush 4 cookies into coarse pieces",
      "Add milk and ice cream to blender",
      "Add crushed Oreos and chocolate syrup",
      "Add ice cubes and blend well",
      "Blend until thick and creamy",
      "Pour into glasses",
      "Top with whipped cream",
      "Garnish with remaining Oreo pieces",
      "Drizzle chocolate sauce on top"
    ],
    prepTime: "7 minutes",
    servings: "2 glasses"
  },

  // Quick & Easy (5 recipes)
  {
    name: "2-Minute Maggi",
    category: "quick-easy",
    ingredients: [
      "1 packet Maggi noodles",
      "1.5 cups water",
      "1 Maggi masala packet",
      "1/4 cup mixed vegetables (optional)",
      "1 green chili (chopped)",
      "1 tsp oil",
      "Few coriander leaves",
      "1/2 onion (chopped, optional)"
    ],
    steps: [
      "Boil water in a pan",
      "Add oil and chopped vegetables if using",
      "Add Maggi noodles to boiling water",
      "Cook for 2 minutes while stirring",
      "Add masala packet and mix well",
      "Add green chilies and onions",
      "Cook for another minute",
      "Garnish with coriander leaves",
      "Serve hot immediately",
      "Enjoy your quick meal!"
    ],
    prepTime: "5 minutes",
    servings: "1 person"
  },
  {
    name: "Bread Omelet",
    category: "quick-easy",
    ingredients: [
      "2 bread slices",
      "2 eggs",
      "1 small onion (chopped)",
      "1 tomato (chopped)",
      "1 green chili (chopped)",
      "Salt to taste",
      "1/4 tsp black pepper",
      "2 tbsp oil",
      "Few coriander leaves",
      "1/4 tsp turmeric"
    ],
    steps: [
      "Beat eggs in a bowl",
      "Add chopped onions, tomatoes, chilies",
      "Add salt, pepper, and turmeric",
      "Mix in chopped coriander leaves",
      "Heat oil in a pan",
      "Dip bread slice in egg mixture",
      "Place on hot pan and cook",
      "Pour remaining egg around bread",
      "Flip when bottom is golden",
      "Serve hot with ketchup"
    ],
    prepTime: "10 minutes",
    servings: "1 person"
  },
  {
    name: "Instant Poha",
    category: "quick-easy",
    ingredients: [
      "1 cup thick poha (flattened rice)",
      "1 onion (chopped)",
      "1/4 cup peanuts",
      "8-10 curry leaves",
      "2 green chilies (slit)",
      "1/2 tsp turmeric",
      "1/2 tsp mustard seeds",
      "2 tbsp oil",
      "Salt to taste",
      "Lemon juice",
      "Coriander leaves for garnish"
    ],
    steps: [
      "Wash poha gently and drain water",
      "Sprinkle salt and turmeric, mix lightly",
      "Heat oil in pan, add mustard seeds",
      "Add peanuts and fry until golden",
      "Add curry leaves and green chilies",
      "Add chopped onions and sauté",
      "Add the seasoned poha",
      "Mix gently and cook for 2 minutes",
      "Add lemon juice and coriander",
      "Serve hot with pickle"
    ],
    prepTime: "15 minutes",
    servings: "2-3 people"
  },
  {
    name: "Microwave Mug Cake",
    category: "quick-easy",
    ingredients: [
      "4 tbsp all-purpose flour",
      "4 tbsp sugar",
      "2 tbsp cocoa powder",
      "1/4 tsp baking powder",
      "Pinch of salt",
      "3 tbsp milk",
      "2 tbsp oil",
      "1/4 tsp vanilla extract",
      "2 tbsp chocolate chips (optional)"
    ],
    steps: [
      "Mix dry ingredients in a microwave-safe mug",
      "Add milk, oil, and vanilla extract",
      "Stir until smooth with no lumps",
      "Add chocolate chips if using",
      "Microwave for 90 seconds on high",
      "Check if done with a toothpick",
      "Microwave for 30 more seconds if needed",
      "Let cool for 1 minute",
      "Top with ice cream or whipped cream",
      "Enjoy your instant dessert!"
    ],
    prepTime: "5 minutes",
    servings: "1 person"
  },
  {
    name: "Instant Sandwich",
    category: "quick-easy",
    ingredients: [
      "4 bread slices",
      "2 tbsp butter",
      "2 slices cheese",
      "1 tomato (sliced)",
      "1/2 cucumber (sliced)",
      "Few lettuce leaves",
      "2 tbsp green chutney",
      "Salt and pepper to taste",
      "1/4 onion (sliced, optional)"
    ],
    steps: [
      "Apply butter on bread slices",
      "Spread green chutney on two slices",
      "Layer with cheese slices",
      "Add tomato and cucumber slices",
      "Season with salt and pepper",
      "Add lettuce and onion if using",
      "Cover with remaining bread slices",
      "Heat a pan or sandwich maker",
      "Grill until golden and crispy",
      "Cut diagonally and serve hot"
    ],
    prepTime: "10 minutes",
    servings: "2 people"
  }
];
