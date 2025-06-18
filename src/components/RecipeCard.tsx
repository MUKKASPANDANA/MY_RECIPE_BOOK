
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
      case 'pickles': return 'Pickles';
      case 'fried-rice': return 'Fried Rice';
      case 'chinese': return 'Chinese';
      case 'curries': return 'Curries';
      default: return 'Other';
    }
  };

  const getCategoryColor = (category: Recipe['category']) => {
    switch (category) {
      case 'pickles': return 'bg-green-100 text-green-800';
      case 'fried-rice': return 'bg-yellow-100 text-yellow-800';
      case 'chinese': return 'bg-red-100 text-red-800';
      case 'curries': return 'bg-orange-100 text-orange-800';
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
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
          {recipe.name}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
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

        <div className="text-sm text-gray-600">
          <p className="mb-1">
            <span className="font-medium">{recipe.ingredients.length}</span> ingredients
          </p>
          <p>
            <span className="font-medium">{recipe.steps.length}</span> steps
          </p>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100">
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
