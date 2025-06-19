import React, { useState, useEffect } from 'react';
import { Search, Plus, Book, ChefHat, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import AddRecipeForm from '@/components/AddRecipeForm';
import EditRecipeForm from '@/components/EditRecipeForm';
import RecipeCard from '@/components/RecipeCard';
import RecipeDetailModal from '@/components/RecipeDetailModal';
import { Recipe } from '@/types/Recipe';
import { sampleRecipes } from '@/data/sampleRecipes';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 5;
  const { toast } = useToast();

  // Load recipes from localStorage on component mount
  useEffect(() => {
    console.log('Loading recipes from localStorage...');
    const savedRecipes = localStorage.getItem('recipeBook');
    console.log('Saved recipes from localStorage:', savedRecipes);
    
    if (savedRecipes) {
      try {
        const parsedRecipes = JSON.parse(savedRecipes);
        console.log('Parsed recipes:', parsedRecipes);
        console.log('Setting recipes state with:', parsedRecipes.length, 'recipes');
        setRecipes(parsedRecipes);
      } catch (error) {
        console.error('Error loading recipes from localStorage:', error);
        loadSampleRecipes();
      }
    } else {
      console.log('No saved recipes found, loading sample recipes');
      loadSampleRecipes();
    }
  }, []);

  const loadSampleRecipes = () => {
    console.log('Loading sample recipes...');
    console.log('Sample recipes data:', sampleRecipes);
    const recipesWithIds: Recipe[] = sampleRecipes.map((recipe, index) => ({
      ...recipe,
      id: (Date.now() + index).toString(),
    }));
    console.log('Recipes with IDs:', recipesWithIds);
    console.log('Setting recipes state with sample recipes:', recipesWithIds.length, 'recipes');
    setRecipes(recipesWithIds);
  };

  // Save recipes to localStorage whenever recipes change
  useEffect(() => {
    console.log('Saving recipes to localStorage:', recipes);
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
    toast({
      title: "Recipe Added",
      description: `${recipe.name} has been added to your recipe book.`,
    });
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
      toast({
        title: "Recipe Updated",
        description: `${updatedRecipe.name} has been updated successfully.`,
      });
    }
  };

  // Delete recipe
  const deleteRecipe = (recipeId: string) => {
    const recipeToDelete = recipes.find(r => r.id === recipeId);
    setRecipes(prev => prev.filter(recipe => recipe.id !== recipeId));
    toast({
      title: "Recipe Deleted",
      description: `${recipeToDelete?.name} has been removed from your recipe book.`,
      variant: "destructive",
    });
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

  console.log('=== RENDERING DEBUG INFO ===');
  console.log('Current recipes state length:', recipes.length);
  console.log('Current recipes state:', recipes);
  console.log('Filtered recipes length:', filteredRecipes.length);
  console.log('Filtered recipes:', filteredRecipes);
  console.log('Current page:', currentPage);
  console.log('Recipes per page:', recipesPerPage);
  console.log('Active category:', activeCategory);
  console.log('Search term:', searchTerm);

  // Pagination logic
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const currentRecipes = filteredRecipes.slice(startIndex, endIndex);

  console.log('Current recipes for display length:', currentRecipes.length);
  console.log('Current recipes for display:', currentRecipes);
  console.log('Total pages:', totalPages);
  console.log('Start index:', startIndex, 'End index:', endIndex);
  console.log('=== END RENDERING DEBUG INFO ===');

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  const categories = [
    { 
      id: 'all', 
      label: 'All Recipes', 
      count: recipes.length,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
      color: 'from-purple-400 to-pink-400'
    },
    { 
      id: 'biryani', 
      label: 'Biryani', 
      count: recipes.filter(r => r.category === 'biryani').length,
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d117?w=800',
      color: 'from-orange-400 to-red-400'
    },
    { 
      id: 'fried-rice', 
      label: 'Fried Rice', 
      count: recipes.filter(r => r.category === 'fried-rice').length,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800',
      color: 'from-yellow-400 to-orange-400'
    },
    { 
      id: 'pickles', 
      label: 'Pickles', 
      count: recipes.filter(r => r.category === 'pickles').length,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800',
      color: 'from-green-400 to-emerald-400'
    },
    { 
      id: 'shakes', 
      label: 'Shakes', 
      count: recipes.filter(r => r.category === 'shakes').length,
      image: 'https://images.unsplash.com/photo-1548373902-d5b6ad046224?w=800',
      color: 'from-pink-400 to-rose-400'
    },
    { 
      id: 'soups', 
      label: 'Soups', 
      count: recipes.filter(r => r.category === 'soups').length,
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800',
      color: 'from-blue-400 to-cyan-400'
    },
    { 
      id: 'salads', 
      label: 'Salads', 
      count: recipes.filter(r => r.category === 'salads').length,
      image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=800',
      color: 'from-lime-400 to-green-400'
    },
    { 
      id: 'detox-water', 
      label: 'Detox Water', 
      count: recipes.filter(r => r.category === 'detox-water').length,
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800',
      color: 'from-cyan-400 to-blue-400'
    },
    { 
      id: 'curries', 
      label: 'Curries', 
      count: recipes.filter(r => r.category === 'curries').length,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800',
      color: 'from-amber-400 to-yellow-400'
    },
    { 
      id: 'non-veg-curries', 
      label: 'Non-Veg Curries', 
      count: recipes.filter(r => r.category === 'non-veg-curries').length,
      image: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=800',
      color: 'from-red-400 to-pink-400'
    },
    { 
      id: 'snacks', 
      label: 'Snacks', 
      count: recipes.filter(r => r.category === 'snacks').length,
      image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800',
      color: 'from-indigo-400 to-purple-400'
    },
    { 
      id: 'juices', 
      label: 'Juices', 
      count: recipes.filter(r => r.category === 'juices').length,
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800',
      color: 'from-emerald-400 to-teal-400'
    },
    { 
      id: 'desserts-sweets', 
      label: 'Desserts & Sweets', 
      count: recipes.filter(r => r.category === 'desserts-sweets').length,
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800',
      color: 'from-violet-400 to-purple-400'
    },
    { 
      id: 'breakfast', 
      label: 'Breakfast', 
      count: recipes.filter(r => r.category === 'breakfast').length,
      image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800',
      color: 'from-orange-400 to-amber-400'
    },
    { 
      id: 'street-food', 
      label: 'Street Food', 
      count: recipes.filter(r => r.category === 'street-food').length,
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800',
      color: 'from-red-400 to-orange-400'
    },
    { 
      id: 'south-indian', 
      label: 'South Indian', 
      count: recipes.filter(r => r.category === 'south-indian').length,
      image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800',
      color: 'from-green-400 to-lime-400'
    },
    { 
      id: 'north-indian', 
      label: 'North Indian', 
      count: recipes.filter(r => r.category === 'north-indian').length,
      image: 'https://images.unsplash.com/photo-1588566565463-180a5b2090d2?w=800',
      color: 'from-yellow-400 to-red-400'
    },
    { 
      id: 'chinese', 
      label: 'Chinese', 
      count: recipes.filter(r => r.category === 'chinese').length,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800',
      color: 'from-red-400 to-yellow-400'
    },
    { 
      id: 'italian', 
      label: 'Italian', 
      count: recipes.filter(r => r.category === 'italian').length,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
      color: 'from-green-400 to-red-400'
    },
    { 
      id: 'mexican', 
      label: 'Mexican', 
      count: recipes.filter(r => r.category === 'mexican').length,
      image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800',
      color: 'from-lime-400 to-yellow-400'
    },
    { 
      id: 'rice-varieties', 
      label: 'Rice Varieties', 
      count: recipes.filter(r => r.category === 'rice-varieties').length,
      image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800',
      color: 'from-amber-400 to-orange-400'
    },
    { 
      id: 'roti-paratha', 
      label: 'Roti & Paratha', 
      count: recipes.filter(r => r.category === 'roti-paratha').length,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800',
      color: 'from-yellow-400 to-amber-400'
    },
    { 
      id: 'gravy-dishes', 
      label: 'Gravy Dishes', 
      count: recipes.filter(r => r.category === 'gravy-dishes').length,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800',
      color: 'from-orange-400 to-red-400'
    },
    { 
      id: 'tandoori', 
      label: 'Tandoori', 
      count: recipes.filter(r => r.category === 'tandoori').length,
      image: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=800',
      color: 'from-red-400 to-pink-400'
    },
    { 
      id: 'stir-fry', 
      label: 'Stir Fry', 
      count: recipes.filter(r => r.category === 'stir-fry').length,
      image: 'https://images.unsplash.com/photo-1588566565463-180a5b2090d2?w=800',
      color: 'from-green-400 to-emerald-400'
    },
    { 
      id: 'healthy-low-cal', 
      label: 'Healthy/Low-Cal', 
      count: recipes.filter(r => r.category === 'healthy-low-cal').length,
      image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=800',
      color: 'from-lime-400 to-green-400'
    },
    { 
      id: 'festive-specials', 
      label: 'Festive Specials', 
      count: recipes.filter(r => r.category === 'festive-specials').length,
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d117?w=800',
      color: 'from-purple-400 to-pink-400'
    },
    { 
      id: 'one-pot-meals', 
      label: 'One-Pot Meals', 
      count: recipes.filter(r => r.category === 'one-pot-meals').length,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800',
      color: 'from-blue-400 to-indigo-400'
    },
    { 
      id: 'baking-cakes', 
      label: 'Baking & Cakes', 
      count: recipes.filter(r => r.category === 'baking-cakes').length,
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800',
      color: 'from-pink-400 to-rose-400'
    },
    { 
      id: 'ice-creams', 
      label: 'Ice Creams', 
      count: recipes.filter(r => r.category === 'ice-creams').length,
      image: 'https://images.unsplash.com/photo-1548373902-d5b6ad046224?w=800',
      color: 'from-cyan-400 to-blue-400'
    },
    { 
      id: 'sandwiches-wraps', 
      label: 'Sandwiches & Wraps', 
      count: recipes.filter(r => r.category === 'sandwiches-wraps').length,
      image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800',
      color: 'from-amber-400 to-yellow-400'
    },
    { 
      id: 'dips-chutneys', 
      label: 'Dips & Chutneys', 
      count: recipes.filter(r => r.category === 'dips-chutneys').length,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800',
      color: 'from-emerald-400 to-teal-400'
    },
    { 
      id: 'beverages-mocktails', 
      label: 'Beverages & Mocktails', 
      count: recipes.filter(r => r.category === 'beverages-mocktails').length,
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800',
      color: 'from-teal-400 to-cyan-400'
    },
    { 
      id: 'kids-special', 
      label: 'Kids Special', 
      count: recipes.filter(r => r.category === 'kids-special').length,
      image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800',
      color: 'from-violet-400 to-purple-400'
    },
    { 
      id: 'party-starters', 
      label: 'Party Starters', 
      count: recipes.filter(r => r.category === 'party-starters').length,
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800',
      color: 'from-indigo-400 to-blue-400'
    },
    { 
      id: 'quick-easy', 
      label: 'Quick & Easy', 
      count: recipes.filter(r => r.category === 'quick-easy').length,
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800',
      color: 'from-lime-400 to-emerald-400'
    },
    { 
      id: 'lunch-box', 
      label: 'Lunch Box', 
      count: recipes.filter(r => r.category === 'lunch-box').length,
      image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800',
      color: 'from-yellow-400 to-orange-400'
    },
    { 
      id: 'other', 
      label: 'Other', 
      count: recipes.filter(r => r.category === 'other').length,
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800',
      color: 'from-gray-400 to-slate-400'
    },
  ];

  const handleEdit = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (e: React.MouseEvent, recipeId: string) => {
    e.stopPropagation();
    deleteRecipe(recipeId);
  };

  // Log before rendering the main content
  console.log('About to render - filteredRecipes.length:', filteredRecipes.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-500 p-2 rounded-lg transform transition-transform duration-200 hover:scale-110 animate-bounce-gentle">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 animate-fade-in">My Recipe Book</h1>
                <p className="text-sm text-gray-600 animate-fade-in" style={{ animationDelay: '100ms' }}>Discover and save your favorite recipes</p>
              </div>
            </div>
            
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white transform transition-all duration-200 hover:scale-105 animate-pulse-gentle">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Recipe
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
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
        <div className="mb-8 animate-fade-in">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 animate-pulse" />
            <Input
              type="text"
              placeholder="Search recipes or ingredients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-orange-200 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 hover:shadow-md focus:shadow-lg"
            />
          </div>
        </div>

        {/* Horizontal Scrollable Category Bar with Colorful Oval Images */}
        <div className="mb-8 animate-fade-in">
          <div className="bg-gradient-to-r from-white to-orange-50 rounded-xl border border-orange-200 p-6 shadow-lg backdrop-blur-sm animate-slide-up">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 animate-fade-in">Categories</h3>
            <ScrollArea className="w-full">
              <div className="flex space-x-6 pb-6">
                {categories.map((category, index) => (
                  <div
                    key={category.id}
                    className={`cursor-pointer transition-all duration-500 ease-out whitespace-nowrap animate-fade-in ${
                      activeCategory === category.id
                        ? 'transform scale-110 animate-bounce-gentle'
                        : 'hover:transform hover:scale-105'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <div className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                      activeCategory === category.id
                        ? 'ring-4 ring-orange-500 shadow-2xl shadow-orange-200 animate-glow'
                        : 'ring-2 ring-transparent hover:ring-orange-300 hover:shadow-xl'
                    }`}>
                      <div className="w-24 h-24 relative group">
                        {/* Gradient background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 rounded-full transition-opacity duration-300 group-hover:opacity-40`} />
                        
                        {/* Image */}
                        <img
                          src={category.image}
                          alt={category.label}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                        />
                        
                        {/* Overlay gradient for better text visibility */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 rounded-full transition-opacity duration-300 group-hover:opacity-20`} />
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-xs font-medium text-gray-700 transition-colors duration-300 hover:text-orange-600 leading-tight">
                        {category.label}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 animate-fade-in" style={{ animationDelay: `${index * 50 + 100}ms` }}>
                        ({category.count})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <ScrollBar 
                orientation="horizontal" 
                className="h-2 mt-4 bg-orange-100 rounded-full"
              />
            </ScrollArea>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center animate-fade-in">
          <p className="text-gray-600 animate-slide-up">
            {filteredRecipes.length} {filteredRecipes.length === 1 ? 'recipe' : 'recipes'} found
            {activeCategory !== 'all' && ` in ${categories.find(c => c.id === activeCategory)?.label}`}
            {filteredRecipes.length > recipesPerPage && (
              <span className="ml-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
                (Page {currentPage} of {totalPages})
              </span>
            )}
          </p>
        </div>

        {/* Debug Info - TEMPORARY */}
        <div className="mb-4 p-4 bg-yellow-100 border border-yellow-300 rounded">
          <h4 className="font-bold">Debug Info:</h4>
          <p>Total recipes in state: {recipes.length}</p>
          <p>Filtered recipes: {filteredRecipes.length}</p>
          <p>Current recipes to display: {currentRecipes.length}</p>
          <p>Should show "No recipes" message: {filteredRecipes.length === 0 ? 'YES' : 'NO'}</p>
        </div>

        {/* Recipes Grid */}
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-12 animate-fade-in">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-orange-100 max-w-md mx-auto transform transition-all duration-300 hover:shadow-md animate-float">
              <Book className="h-12 w-12 text-gray-400 mx-auto mb-4 animate-pulse" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2 animate-fade-in">
                {recipes.length === 0 ? 'No recipes yet' : 'No recipes found'}
              </h3>
              <p className="text-gray-600 mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
                {recipes.length === 0 
                  ? 'Start building your recipe collection by adding your first recipe!'
                  : 'Try adjusting your search terms or category to find what you\'re looking for.'
                }
              </p>
              {recipes.length === 0 && (
                <Button 
                  onClick={() => setIsAddDialogOpen(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white transform transition-all duration-200 hover:scale-105 animate-bounce-gentle"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Recipe
                </Button>
              )}
            </div>
          </div>
        ) : (
          <>
            {(() => {
              console.log('Rendering recipes grid with', currentRecipes.length, 'recipes');
              return null; // This IIFE allows us to run console.log without returning void in JSX
            })()}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
              {currentRecipes.map((recipe, index) => {
                console.log('Rendering recipe:', recipe.name, 'at index:', index);
                return (
                  <div 
                    key={recipe.id} 
                    className="relative group animate-fade-in animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:rotate-1">
                      <RecipeCard
                        recipe={recipe}
                        onClick={() => setSelectedRecipe(recipe)}
                      />
                    </div>
                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-slide-in-right">
                      <Button
                        onClick={() => handleEdit(recipe)}
                        size="sm"
                        variant="outline"
                        className="bg-white/90 hover:bg-white h-8 w-8 p-0 transform transition-all duration-200 hover:scale-110 animate-bounce-gentle"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={(e) => handleDelete(e, recipe.id)}
                        size="sm"
                        variant="outline"
                        className="bg-white/90 hover:bg-red-50 hover:border-red-200 text-red-600 h-8 w-8 p-0 transform transition-all duration-200 hover:scale-110 animate-shake"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center animate-fade-in animate-slide-up">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        className={`transition-all duration-300 ${currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:scale-105 hover:-translate-x-1'}`}
                      />
                    </PaginationItem>
                    
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <PaginationItem key={pageNumber}>
                          <PaginationLink
                            onClick={() => setCurrentPage(pageNumber)}
                            isActive={currentPage === pageNumber}
                            className="cursor-pointer transition-all duration-300 hover:scale-105 animate-fade-in"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            {pageNumber}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        className={`transition-all duration-300 ${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:scale-105 hover:translate-x-1'}`}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}
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
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
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
