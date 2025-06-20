
export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  steps: string[];
  image?: string;
  prepTime?: string;
  servings?: string;
  category: 
    | 'breakfast'
    | 'lunch-dinner'
    | 'snacks'
    | 'beverages'
    | 'desserts'
    | 'salads'
    | 'soups'
    | 'rice-dishes'
    | 'pasta-noodles'
    | 'bread-roti'
    | 'chinese'
    | 'italian'
    | 'mexican'
    | 'healthy'
    | 'street-food'
    | 'south-indian'
    | 'north-indian'
    | 'quick-meals'
    | 'other';
}
