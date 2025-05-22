
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import SearchBar from "./SearchBar";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  compareCount: number;
  onCompareOpen: () => void;
}

const Header = ({ searchTerm, onSearchChange, compareCount, onCompareOpen }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-primary">KeyboardFinder</h1>
          <Button 
            variant="outline" 
            size="sm" 
            className="md:hidden"
            onClick={onCompareOpen}
            disabled={compareCount === 0}
          >
            <Icon name="Scale" className="mr-1 h-4 w-4" />
            Сравнить ({compareCount})
          </Button>
        </div>
        
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={onSearchChange} 
        />
        
        <div className="hidden md:block">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onCompareOpen}
            disabled={compareCount === 0}
          >
            <Icon name="Scale" className="mr-1 h-4 w-4" />
            Сравнить ({compareCount})
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
