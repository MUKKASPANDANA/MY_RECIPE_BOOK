
import React from 'react';
import { Plus, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AddRecipeForm from '@/components/AddRecipeForm';
import { Recipe } from '@/types/Recipe';

interface RecipeHeaderProps {
  isAddDialogOpen: boolean;
  setIsAddDialogOpen: (open: boolean) => void;
  onAddRecipe: (recipe: Omit<Recipe, 'id'>) => void;
}

const RecipeHeader: React.FC<RecipeHeaderProps> = ({
  isAddDialogOpen,
  setIsAddDialogOpen,
  onAddRecipe,
}) => {
  const handleAddRecipe = (recipe: Omit<Recipe, 'id'>) => {
    onAddRecipe(recipe);
    setIsAddDialogOpen(false);
  };

  return (
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
              <AddRecipeForm onSubmit={handleAddRecipe} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default RecipeHeader;
