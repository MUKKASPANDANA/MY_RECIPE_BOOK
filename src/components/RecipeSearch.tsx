
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface RecipeSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const RecipeSearch: React.FC<RecipeSearchProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-8">
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search recipes or ingredients..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 border-orange-200 focus:border-orange-500 focus:ring-orange-500"
        />
      </div>
    </div>
  );
};

export default RecipeSearch;
