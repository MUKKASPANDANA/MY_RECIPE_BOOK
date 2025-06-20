
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
      case 'biryani': return 'Biryani';
      case 'fried-rice': return 'Fried Rice';
      case 'pickles': return 'Pickles';
      case 'shakes': return 'Shakes';
      case 'soups': return 'Soups';
      case 'salads': return 'Salads';
      case 'detox-water': return 'Detox Water';
      case 'curries': return 'Curries';
      case 'non-veg-curries': return 'Non-Veg Curries';
      case 'snacks': return 'Snacks';
      case 'juices': return 'Juices';
      case 'desserts-sweets': return 'Desserts & Sweets';
      case 'breakfast': return 'Breakfast';
      case 'street-food': return 'Street Food';
      case 'south-indian': return 'South Indian';
      case 'north-indian': return 'North Indian';
      case 'chinese': return 'Chinese';
      case 'italian': return 'Italian';
      case 'mexican': return 'Mexican';
      case 'rice-varieties': return 'Rice Varieties';
      case 'roti-paratha': return 'Roti & Paratha';
      case 'gravy-dishes': return 'Gravy Dishes';
      case 'tandoori': return 'Tandoori';
      case 'stir-fry': return 'Stir Fry';
      case 'healthy-low-cal': return 'Healthy';
      case 'festive-specials': return 'Festive';
      case 'one-pot-meals': return 'One-Pot';
      case 'baking-cakes': return 'Baking';
      case 'ice-creams': return 'Ice Creams';
      case 'sandwiches-wraps': return 'Sandwiches';
      case 'dips-chutneys': return 'Dips & Chutneys';
      case 'beverages-mocktails': return 'Beverages';
      case 'kids-special': return 'Kids Special';
      case 'party-starters': return 'Party Starters';
      case 'quick-easy': return 'Quick & Easy';
      case 'lunch-box': return 'Lunch Box';
      default: return 'Other';
    }
  };

  const getCategoryColor = (category: Recipe['category']) => {
    switch (category) {
      case 'biryani': return 'bg-amber-100 text-amber-800';
      case 'fried-rice': return 'bg-yellow-100 text-yellow-800';
      case 'pickles': return 'bg-green-100 text-green-800';
      case 'shakes': return 'bg-pink-100 text-pink-800';
      case 'soups': return 'bg-blue-100 text-blue-800';
      case 'salads': return 'bg-emerald-100 text-emerald-800';
      case 'detox-water': return 'bg-cyan-100 text-cyan-800';
      case 'curries': return 'bg-orange-100 text-orange-800';
      case 'non-veg-curries': return 'bg-red-100 text-red-800';
      case 'snacks': return 'bg-purple-100 text-purple-800';
      case 'juices': return 'bg-lime-100 text-lime-800';
      case 'desserts-sweets': return 'bg-rose-100 text-rose-800';
      case 'breakfast': return 'bg-yellow-100 text-yellow-800';
      case 'street-food': return 'bg-orange-100 text-orange-800';
      case 'south-indian': return 'bg-green-100 text-green-800';
      case 'north-indian': return 'bg-red-100 text-red-800';
      case 'chinese': return 'bg-red-100 text-red-800';
      case 'italian': return 'bg-green-100 text-green-800';
      case 'mexican': return 'bg-yellow-100 text-yellow-800';
      case 'rice-varieties': return 'bg-amber-100 text-amber-800';
      case 'roti-paratha': return 'bg-orange-100 text-orange-800';
      case 'gravy-dishes': return 'bg-red-100 text-red-800';
      case 'tandoori': return 'bg-orange-100 text-orange-800';
      case 'stir-fry': return 'bg-green-100 text-green-800';
      case 'healthy-low-cal': return 'bg-emerald-100 text-emerald-800';
      case 'festive-specials': return 'bg-purple-100 text-purple-800';
      case 'one-pot-meals': return 'bg-blue-100 text-blue-800';
      case 'baking-cakes': return 'bg-pink-100 text-pink-800';
      case 'ice-creams': return 'bg-cyan-100 text-cyan-800';
      case 'sandwiches-wraps': return 'bg-yellow-100 text-yellow-800';
      case 'dips-chutneys': return 'bg-green-100 text-green-800';
      case 'beverages-mocktails': return 'bg-blue-100 text-blue-800';
      case 'kids-special': return 'bg-pink-100 text-pink-800';
      case 'party-starters': return 'bg-purple-100 text-purple-800';
      case 'quick-easy': return 'bg-lime-100 text-lime-800';
      case 'lunch-box': return 'bg-amber-100 text-amber-800';
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
