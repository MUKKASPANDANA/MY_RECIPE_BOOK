
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
    { id: 'pickles', label: 'Pickles', count: recipes.filter(r => r.category === 'pickles').length },
    { id: 'fried-rice', label: 'Fried Rice', count: recipes.filter(r => r.category === 'fried-rice').length },
    { id: 'chinese', label: 'Chinese Food', count: recipes.filter(r => r.category === 'chinese').length },
    { id: 'curries', label: 'Curries', count: recipes.filter(r => r.category === 'curries').length },
    { id: 'other', label: 'Other', count: recipes.filter(r => r.category === 'other').length },
  ];

  return (
    <Tabs value={activeCategory} onValueChange={onCategoryChange} className="mb-8">
      <TabsList className="grid w-full grid-cols-6 bg-white border border-orange-200">
        {categories.map((category) => (
          <TabsTrigger 
            key={category.id} 
            value={category.id}
            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
          >
            {category.label} ({category.count})
          </TabsTrigger>
        ))}
      </TabsList>

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
                  {recipes.length === 0 ? 'Loading recipes...' : 'No recipes found'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {recipes.length === 0 
                    ? 'Please wait while we load your recipe collection.'
                    : 'Try adjusting your search terms or category to find what you\'re looking for.'
                  }
                </p>
                {recipes.length === 0 && (
                  <Button 
                    onClick={onLoadSampleRecipes}
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Load Sample Recipes
                  </Button>
                )}
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
