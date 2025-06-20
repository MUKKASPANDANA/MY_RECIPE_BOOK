
import { Recipe } from '@/types/Recipe';

import { breakfastRecipes } from './categories/breakfast';
import { lunchDinnerRecipes } from './categories/lunch-dinner';
import { snackRecipes } from './categories/snacks';
import { beverageRecipes } from './categories/beverages';
import { dessertRecipes } from './categories/desserts';
import { saladRecipes } from './categories/salads';
import { soupRecipes } from './categories/soups';
import { riceDishRecipes } from './categories/rice-dishes';
import { pastaNoodleRecipes } from './categories/pasta-noodles';
import { breadRotiRecipes } from './categories/bread-roti';
import { chineseRecipes } from './categories/chinese';
import { italianRecipes } from './categories/italian';
import { mexicanRecipes } from './categories/mexican';
import { healthyRecipes } from './categories/healthy';
import { streetFoodRecipes } from './categories/street-food';
import { southIndianRecipes } from './categories/south-indian';
import { northIndianRecipes } from './categories/north-indian';
import { quickMealRecipes } from './categories/quick-meals';

export const sampleRecipes: Omit<Recipe, 'id'>[] = [
  ...breakfastRecipes,
  ...lunchDinnerRecipes,
  ...snackRecipes,
  ...beverageRecipes,
  ...dessertRecipes,
  ...saladRecipes,
  ...soupRecipes,
  ...riceDishRecipes,
  ...pastaNoodleRecipes,
  ...breadRotiRecipes,
  ...chineseRecipes,
  ...italianRecipes,
  ...mexicanRecipes,
  ...healthyRecipes,
  ...streetFoodRecipes,
  ...southIndianRecipes,
  ...northIndianRecipes,
  ...quickMealRecipes,
];
