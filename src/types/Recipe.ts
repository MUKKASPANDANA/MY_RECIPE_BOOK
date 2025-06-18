
export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  steps: string[];
  image?: string;
  prepTime?: string;
  servings?: string;
  category: 'pickles' | 'fried-rice' | 'chinese' | 'curries' | 'other';
}
