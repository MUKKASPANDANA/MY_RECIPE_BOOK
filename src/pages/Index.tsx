
import React, { useState, useEffect } from 'react';
import { Search, Plus, Book, ChefHat, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AddRecipeForm from '@/components/AddRecipeForm';
import EditRecipeForm from '@/components/EditRecipeForm';
import RecipeCard from '@/components/RecipeCard';
import RecipeDetailModal from '@/components/RecipeDetailModal';
import { Recipe } from '@/types/Recipe';
import { sampleRecipes } from '@/data/sampleRecipes';

const Index = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Load recipes from localStorage on component mount
  useEffect(() => {
    const savedRecipes = localStorage.getItem('recipeBook');
    if (savedRecipes) {
      try {
        const parsedRecipes = JSON.parse(savedRecipes);
        setRecipes(parsedRecipes);
      } catch (error) {
        console.error('Error loading recipes from localStorage:', error);
        // If no saved recipes, load sample recipes
        loadSampleRecipes();
      }
    } else {
      // Load sample recipes if no saved recipes
      loadSampleRecipes();
    }
  }, []);

  const loadSampleRecipes = () => {
    const recipesWithIds: Recipe[] = sampleRecipes.map((recipe, index) => ({
      ...recipe,
      id: (Date.now() + index).toString(),
    }));
    setRecipes(recipesWithIds);
  };

  // Save recipes to localStorage whenever recipes change
  useEffect(() => {
    localStorage.setItem('recipeBook', JSON.stringify(recipes));
  }, [recipes]);

  // Add new recipe
  const addRecipe = (recipe: Omit<Recipe, 'id'>) => {
    const newRecipe: Recipe = {
      ...recipe,
      id: Date.now().toString(),
    };
    setRecipes(prev => [...prev, newRecipe]);
    setIsAddDialogOpen(false);
  };

  // Edit recipe
  const editRecipe = (updatedRecipe: Omit<Recipe, 'id'>) => {
    if (editingRecipe) {
      const updated: Recipe = {
        ...updatedRecipe,
        id: editingRecipe.id,
      };
      setRecipes(prev => prev.map(recipe => 
        recipe.id === editingRecipe.id ? updated : recipe
      ));
      setIsEditDialogOpen(false);
      setEditingRecipe(null);
    }
  };

  // Filter recipes based on search term and category
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    const matchesCategory = activeCategory === 'all' || recipe.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', label: 'All Recipes', count: recipes.length },
    { id: 'pickles', label: 'Pickles', count: recipes.filter(r => r.category === 'pickles').length },
    { id: 'fried-rice', label: 'Fried Rice', count: recipes.filter(r => r.category === 'fried-rice').length },
    { id: 'chinese', label: 'Chinese Food', count: recipes.filter(r => r.category === 'chinese').length },
    { id: 'curries', label: 'Curries', count: recipes.filter(r => r.category === 'curries').length },
    { id: 'other', label: 'Other', count: recipes.filter(r => r.category === 'other').length },
  ];

  const handleEdit = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setIsEditDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-500 p-2 rounded-lg">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">My Recipe Book</h1>
                <p className="text-sm text-gray-600">Discover and save your favorite recipes</p>
              </div>
            </div>
            
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Recipe
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Recipe</DialogTitle>
                </DialogHeader>
                <AddRecipeForm onSubmit={addRecipe} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search recipes or ingredients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-orange-200 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
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
                      {recipes.length === 0 ? 'No recipes yet' : 'No recipes found'}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {recipes.length === 0 
                        ? 'Start building your recipe collection by adding your first recipe!'
                        : 'Try adjusting your search terms or category to find what you\'re looking for.'
                      }
                    </p>
                    {recipes.length === 0 && (
                      <Button 
                        onClick={() => setIsAddDialogOpen(true)}
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Your First Recipe
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
                        onClick={() => setSelectedRecipe(recipe)}
                      />
                      <Button
                        onClick={() => handleEdit(recipe)}
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
      </main>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <RecipeDetailModal
          recipe={selectedRecipe}
          isOpen={!!selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}

      {/* Edit Recipe Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Recipe</DialogTitle>
          </DialogHeader>
          {editingRecipe && (
            <EditRecipeForm 
              recipe={editingRecipe}
              onSubmit={editRecipe}
              onCancel={() => {
                setIsEditDialogOpen(false);
                setEditingRecipe(null);
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
