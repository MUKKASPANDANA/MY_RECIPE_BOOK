
export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  steps: string[];
  image?: string;
  prepTime?: string;
  servings?: string;
  category: 'appetizers' | 'main-course' | 'desserts' | 'beverages' | 'breakfast' | 'lunch' | 'dinner' | 'snacks' | 'soups' | 'salads' | 'vegetarian' | 'vegan' | 'gluten-free' | 'other';
}
