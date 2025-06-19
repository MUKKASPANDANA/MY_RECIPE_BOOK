import { Recipe } from '@/types/Recipe';

import { biryaniRecipes } from './categories/biryani';
import { friedRiceRecipes } from './categories/fried-rice';
import { pickleRecipes } from './categories/pickles';
import { shakeRecipes } from './categories/shakes';
import { soupRecipes } from './categories/soups';
import { saladRecipes } from './categories/salads';
import { detoxWaterRecipes } from './categories/detox-water';
import { curryRecipes } from './categories/curries';
import { nonVegCurryRecipes } from './categories/non-veg-curries';
import { snackRecipes } from './categories/snacks';
import { juiceRecipes } from './categories/juices';
import { dessertSweetRecipes } from './categories/desserts-sweets';
import { breakfastRecipes } from './categories/breakfast';
import { streetFoodRecipes } from './categories/street-food';
import { southIndianRecipes } from './categories/south-indian';
import { northIndianRecipes } from './categories/north-indian';
import { chineseRecipes } from './categories/chinese';
import { italianRecipes } from './categories/italian';
import { mexicanRecipes } from './categories/mexican';
import { riceVarietyRecipes } from './categories/rice-varieties';
import { rotiParathaRecipes } from './categories/roti-paratha';
import { gravyDishRecipes } from './categories/gravy-dishes';
import { tandooriRecipes } from './categories/tandoori';
import { stirFryRecipes } from './categories/stir-fry';
import { healthyLowCalRecipes } from './categories/healthy-low-cal';
import { festiveSpecialRecipes } from './categories/festive-specials';
import { onePotMealRecipes } from './categories/one-pot-meals';
import { bakingCakeRecipes } from './categories/baking-cakes';
import { iceCreamRecipes } from './categories/ice-creams';
import { sandwichWrapRecipes } from './categories/sandwiches-wraps';
import { dipChutneyRecipes } from './categories/dips-chutneys';
import { beverageMocktailRecipes } from './categories/beverages-mocktails';
import { kidsSpecialRecipes } from './categories/kids-special';
import { partyStarterRecipes } from './categories/party-starters';
import { quickEasyRecipes } from './categories/quick-easy';
import { lunchBoxRecipes } from './categories/lunch-box';

export const sampleRecipes: Omit<Recipe, 'id'>[] = [
  ...biryaniRecipes,
  ...friedRiceRecipes,
  ...pickleRecipes,
  ...shakeRecipes,
  ...soupRecipes,
  ...saladRecipes,
  ...detoxWaterRecipes,
  ...curryRecipes,
  ...nonVegCurryRecipes,
  ...snackRecipes,
  ...juiceRecipes,
  ...dessertSweetRecipes,
  ...breakfastRecipes,
  ...streetFoodRecipes,
  ...southIndianRecipes,
  ...northIndianRecipes,
  ...chineseRecipes,
  ...italianRecipes,
  ...mexicanRecipes,
  ...riceVarietyRecipes,
  ...rotiParathaRecipes,
  ...gravyDishRecipes,
  ...tandooriRecipes,
  ...stirFryRecipes,
  ...healthyLowCalRecipes,
  ...festiveSpecialRecipes,
  ...onePotMealRecipes,
  ...bakingCakeRecipes,
  ...iceCreamRecipes,
  ...sandwichWrapRecipes,
  ...dipChutneyRecipes,
  ...beverageMocktailRecipes,
  ...kidsSpecialRecipes,
  ...partyStarterRecipes,
  ...quickEasyRecipes,
  ...lunchBoxRecipes,
];
