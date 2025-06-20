
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from '@/types/Recipe';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  const getCategoryLabel = (category: Recipe['category']) => {
    switch (category) {
      case 'breakfast': return 'Breakfast';
      case 'lunch-dinner': return 'Lunch & Dinner';
      case 'snacks': return 'Snacks';
      case 'beverages': return 'Beverages';
      case 'desserts': return 'Desserts';
      case 'salads': return 'Salads';
      case 'soups': return 'Soups';
      case 'rice-dishes': return 'Rice Dishes';
      case 'pasta-noodles': return 'Pasta & Noodles';
      case 'bread-roti': return 'Bread & Roti';
      case 'chinese': return 'Chinese';
      case 'italian': return 'Italian';
      case 'mexican': return 'Mexican';
      case 'healthy': return 'Healthy';
      case 'street-food': return 'Street Food';
      case 'south-indian': return 'South Indian';
      case 'north-indian': return 'North Indian';
      case 'quick-meals': return 'Quick Meals';
      default: return 'Other';
    }
  };

  const getCategoryColor = (category: Recipe['category']) => {
    switch (category) {
      case 'breakfast': return 'bg-yellow-100 text-yellow-800';
      case 'lunch-dinner': return 'bg-orange-100 text-orange-800';
      case 'snacks': return 'bg-purple-100 text-purple-800';
      case 'beverages': return 'bg-blue-100 text-blue-800';
      case 'desserts': return 'bg-pink-100 text-pink-800';
      case 'salads': return 'bg-green-100 text-green-800';
      case 'soups': return 'bg-cyan-100 text-cyan-800';
      case 'rice-dishes': return 'bg-amber-100 text-amber-800';
      case 'pasta-noodles': return 'bg-indigo-100 text-indigo-800';
      case 'bread-roti': return 'bg-orange-100 text-orange-800';
      case 'chinese': return 'bg-red-100 text-red-800';
      case 'italian': return 'bg-green-100 text-green-800';
      case 'mexican': return 'bg-yellow-100 text-yellow-800';
      case 'healthy': return 'bg-emerald-100 text-emerald-800';
      case 'street-food': return 'bg-orange-100 text-orange-800';
      case 'south-indian': return 'bg-green-100 text-green-800';
      case 'north-indian': return 'bg-red-100 text-red-800';
      case 'quick-meals': return 'bg-lime-100 text-lime-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 bg-white border-orange-100 hover:border-orange-300"
      onClick={onClick}
    >
      <CardHeader className="p-0">
        {recipe.image ? (
          <div className="relative">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <Badge 
              className={`absolute top-2 left-2 ${getCategoryColor(recipe.category)}`}
            >
              {getCategoryLabel(recipe.category)}
            </Badge>
          </div>
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-t-lg flex items-center justify-center relative">
            <ChefHat className="h-12 w-12 text-orange-400" />
            <Badge 
              className={`absolute top-2 left-2 ${getCategoryColor(recipe.category)}`}
            >
              {getCategoryLabel(recipe.category)}
            </Badge>
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
          {recipe.name}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-600">
          {recipe.prepTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{recipe.prepTime}</span>
            </div>
          )}
          {recipe.servings && (
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{recipe.servings}</span>
            </div>
          )}
        </div>

        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-medium">{recipe.ingredients.length}</span> ingredients
          </p>
          <p>
            <span className="font-medium">{recipe.steps.length}</span> steps
          </p>
        </div>

        <div className="pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-500 line-clamp-2">
            {recipe.ingredients.slice(0, 3).join(', ')}
            {recipe.ingredients.length > 3 && '...'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
