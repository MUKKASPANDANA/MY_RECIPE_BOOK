import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import RecipeHeader from '@/components/RecipeHeader';
import RecipeSearch from '@/components/RecipeSearch';
import RecipeTabs from '@/components/RecipeTabs';
import EditRecipeForm from '@/components/EditRecipeForm';
import RecipeDetailModal from '@/components/RecipeDetailModal';
import { useRecipes } from '@/hooks/useRecipes';
import { Recipe } from '@/types/Recipe';

const Index = () => {
  const {
    recipes,
    selectedRecipe,
    setSelectedRecipe,
    editingRecipe,
    setEditingRecipe,
    addRecipe,
    editRecipe,
    loadSampleRecipes,
  } = useRecipes();

  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter recipes based on search term and category
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    const matchesCategory = activeCategory === 'all' || recipe.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleEdit = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setIsEditDialogOpen(true);
  };

  const handleEditSubmit = (updatedRecipe: Omit<Recipe, 'id'>) => {
    editRecipe(updatedRecipe);
    setIsEditDialogOpen(false);
  };

  const handleEditCancel = () => {
    setIsEditDialogOpen(false);
    setEditingRecipe(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <RecipeHeader
        isAddDialogOpen={isAddDialogOpen}
        setIsAddDialogOpen={setIsAddDialogOpen}
        onAddRecipe={addRecipe}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RecipeSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <RecipeTabs
          recipes={recipes}
          filteredRecipes={filteredRecipes}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onRecipeClick={setSelectedRecipe}
          onEditRecipe={handleEdit}
          onLoadSampleRecipes={loadSampleRecipes}
        />
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
              onSubmit={handleEditSubmit}
              onCancel={handleEditCancel}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
