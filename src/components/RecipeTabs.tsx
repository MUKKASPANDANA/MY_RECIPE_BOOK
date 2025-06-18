
import React from 'react';
import { Book, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RecipeCard from '@/components/RecipeCard';
import { Recipe } from '@/types/Recipe';

interface RecipeTabsProps {
  recipes: Recipe[];
  filteredRecipes: Recipe[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  onRecipeClick: (recipe: Recipe) => void;
  onEditRecipe: (recipe: Recipe) => void;
  onLoadSampleRecipes: () => void;
}

const RecipeTabs: React.FC<RecipeTabsProps> = ({
  recipes,
  filteredRecipes,
  activeCategory,
  onCategoryChange,
  onRecipeClick,
  onEditRecipe,
  onLoadSampleRecipes,
}) => {
  const categories = [
    { id: 'all', label: 'All Recipes', count: recipes.length },
    { id: 'appetizers', label: 'Appetizers', count: recipes.filter(r => r.category === 'appetizers').length },
    { id: 'main-course', label: 'Main Course', count: recipes.filter(r => r.category === 'main-course').length },
    { id: 'desserts', label: 'Desserts', count: recipes.filter(r => r.category === 'desserts').length },
    { id: 'beverages', label: 'Beverages', count: recipes.filter(r => r.category === 'beverages').length },
    { id: 'breakfast', label: 'Breakfast', count: recipes.filter(r => r.category === 'breakfast').length },
    { id: 'lunch', label: 'Lunch', count: recipes.filter(r => r.category === 'lunch').length },
    { id: 'dinner', label: 'Dinner', count: recipes.filter(r => r.category === 'dinner').length },
    { id: 'snacks', label: 'Snacks', count: recipes.filter(r => r.category === 'snacks').length },
    { id: 'soups', label: 'Soups', count: recipes.filter(r => r.category === 'soups').length },
    { id: 'salads', label: 'Salads', count: recipes.filter(r => r.category === 'salads').length },
    { id: 'vegetarian', label: 'Vegetarian', count: recipes.filter(r => r.category === 'vegetarian').length },
    { id: 'vegan', label: 'Vegan', count: recipes.filter(r => r.category === 'vegan').length },
    { id: 'gluten-free', label: 'Gluten Free', count: recipes.filter(r => r.category === 'gluten-free').length },
    { id: 'other', label: 'Other', count: recipes.filter(r => r.category === 'other').length },
  ];

  return (
    <Tabs value={activeCategory} onValueChange={onCategoryChange} className="mb-8">
      <TabsList className="grid w-full grid-cols-8 bg-white border border-orange-200 overflow-x-auto">
        {categories.slice(0, 8).map((category) => (
          <TabsTrigger 
            key={category.id} 
            value={category.id}
            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs"
          >
            {category.label} ({category.count})
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="mt-4 flex flex-wrap gap-2">
        {categories.slice(8).map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-3 py-1 text-sm rounded-full border transition-colors ${
              activeCategory === category.id
                ? 'bg-orange-500 text-white border-orange-500'
                : 'bg-white text-gray-700 border-gray-300 hover:border-orange-300'
            }`}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </div>

      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id}>
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              {filteredRecipes.length} {filteredRecipes.length === 1 ? 'recipe' : 'recipes'} found
              {category.id !== 'all' && ` in ${category.label}`}
            </p>
          </div>

          {/* Recipes Grid */}
          {filteredRecipes.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-orange-100 max-w-md mx-auto">
                <Book className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {recipes.length === 0 ? 'No recipes yet' : 'No recipes found'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {recipes.length === 0 
                    ? 'Start building your recipe collection by adding your first recipe!'
                    : 'Try adjusting your search terms or category to find what you\'re looking for.'
                  }
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRecipes.map((recipe) => (
                <div key={recipe.id} className="relative group">
                  <RecipeCard
                    recipe={recipe}
                    onClick={() => onRecipeClick(recipe)}
                  />
                  <Button
                    onClick={() => onEditRecipe(recipe)}
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default RecipeTabs;
