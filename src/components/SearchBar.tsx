
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  
  // Add effect to trigger search as user types
  useEffect(() => {
    // Trigger search immediately when search value changes
    onSearch(searchValue);
  }, [searchValue, onSearch]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search by job title, company or location..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="pl-10 w-full"
        />
      </div>
      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
