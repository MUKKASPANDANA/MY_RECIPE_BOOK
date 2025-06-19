
import { Recipe } from '@/types/Recipe';
import { biryaniRecipes } from './categories/biryani';
import { friedRiceRecipes } from './categories/fried-rice';
import { pickleRecipes } from './categories/pickles';
import { shakeRecipes } from './categories/shakes';
import { soupRecipes } from './categories/soups';
import { saladRecipes } from './categories/salads';
import { detoxWaterRecipes } from './categories/detox-water';

export const sampleRecipes: Omit<Recipe, 'id'>[] = [
  ...biryaniRecipes,
  ...friedRiceRecipes,
  ...pickleRecipes,
  ...shakeRecipes,
  ...soupRecipes,
  ...saladRecipes,
  ...detoxWaterRecipes,
];
