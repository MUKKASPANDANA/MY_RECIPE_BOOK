
import { useState, useEffect } from 'react';
import { Recipe } from '@/types/Recipe';
import { sampleRecipes } from '@/data/sampleRecipes';

export const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);

  // Load recipes from localStorage on component mount
  useEffect(() => {
    const savedRecipes = localStorage.getItem('recipeBook');
    if (savedRecipes) {
      try {
        const parsedRecipes = JSON.parse(savedRecipes);
        if (parsedRecipes && parsedRecipes.length > 0) {
          setRecipes(parsedRecipes);
        } else {
          // If saved recipes is empty array, load sample recipes
          loadSampleRecipes();
        }
      } catch (error) {
        console.error('Error loading recipes from localStorage:', error);
        // If error parsing, load sample recipes
        loadSampleRecipes();
      }
    } else {
      // If no saved recipes, load sample recipes
      loadSampleRecipes();
    }
  }, []);

  const loadSampleRecipes = () => {
    console.log('Loading sample recipes...');
    const recipesWithIds: Recipe[] = sampleRecipes.map((recipe, index) => ({
      ...recipe,
      id: (Date.now() + index).toString(),
    }));
    setRecipes(recipesWithIds);
    // Save sample recipes to localStorage
    localStorage.setItem('recipeBook', JSON.stringify(recipesWithIds));
  };

  // Save recipes to localStorage whenever recipes change (but not on initial load)
  useEffect(() => {
    if (recipes.length > 0) {
      localStorage.setItem('recipeBook', JSON.stringify(recipes));
    }
  }, [recipes]);

  // Add new recipe
  const addRecipe = (recipe: Omit<Recipe, 'id'>) => {
    const newRecipe: Recipe = {
      ...recipe,
      id: Date.now().toString(),
    };
    setRecipes(prev => [...prev, newRecipe]);
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
      setEditingRecipe(null);
    }
  };

  return {
    recipes,
    selectedRecipe,
    setSelectedRecipe,
    editingRecipe,
    setEditingRecipe,
    addRecipe,
    editRecipe,
    loadSampleRecipes,
  };
};
