
import { useState, useEffect } from "react";
import { KeyboardType } from "@/components/KeyboardCard";
import { keyboards } from "@/data/keyboards";

interface FilterState {
  type: string;
  purpose: string;
  price: [number, number];
  backlight: boolean;
  wireless: boolean;
  mechanical: boolean;
}

interface UseKeyboardFiltersResult {
  filteredKeyboards: KeyboardType[];
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  handleFilterChange: (filters: FilterState) => void;
}

export const defaultFilters: FilterState = {
  type: "",
  purpose: "",
  price: [0, 15000],
  backlight: false,
  wireless: false,
  mechanical: false
};

export const useKeyboardFilters = (): UseKeyboardFiltersResult => {
  const [filteredKeyboards, setFilteredKeyboards] = useState<KeyboardType[]>(keyboards);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentFilters, setCurrentFilters] = useState<FilterState>(defaultFilters);

  const handleFilterChange = (filters: FilterState) => {
    setCurrentFilters(filters);
    applyFilters(filters, searchTerm);
  };

  const applyFilters = (filters: FilterState, search: string) => {
    let results = [...keyboards];
    
    // Фильтрация по типу
    if (filters.type) {
      results = results.filter(keyboard => keyboard.type === filters.type);
    }
    
    // Фильтрация по назначению
    if (filters.purpose) {
      results = results.filter(keyboard => keyboard.purpose === filters.purpose);
    }
    
    // Фильтрация по цене
    results = results.filter(keyboard => 
      keyboard.price >= filters.price[0] && keyboard.price <= filters.price[1]
    );
    
    // Фильтрация по характеристикам
    if (filters.backlight) {
      results = results.filter(keyboard => keyboard.backlight);
    }
    
    if (filters.wireless) {
      results = results.filter(keyboard => keyboard.wireless);
    }
    
    if (filters.mechanical) {
      results = results.filter(keyboard => keyboard.mechanical);
    }
    
    // Фильтрация по поисковому запросу
    if (search.trim() !== "") {
      const term = search.toLowerCase();
      results = results.filter(keyboard => 
        keyboard.name.toLowerCase().includes(term) || 
        keyboard.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredKeyboards(results);
  };

  // Применить фильтры при изменении поискового запроса
  useEffect(() => {
    applyFilters(currentFilters, searchTerm);
  }, [searchTerm]);

  return {
    filteredKeyboards,
    searchTerm,
    setSearchTerm,
    handleFilterChange
  };
};
