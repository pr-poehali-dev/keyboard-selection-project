
import { useState, useEffect } from "react";
import FilterSection from "@/components/FilterSection";
import KeyboardCard, { KeyboardType } from "@/components/KeyboardCard";
import CompareDrawer from "@/components/CompareDrawer";
import { keyboards } from "@/data/keyboards";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [filteredKeyboards, setFilteredKeyboards] = useState<KeyboardType[]>(keyboards);
  const [keyboardsToCompare, setKeyboardsToCompare] = useState<KeyboardType[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (filters: any) => {
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
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      results = results.filter(keyboard => 
        keyboard.name.toLowerCase().includes(term) || 
        keyboard.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredKeyboards(results);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    handleFilterChange({
      type: "",
      purpose: "",
      price: [0, 15000],
      backlight: false,
      wireless: false,
      mechanical: false
    });
  }, [searchTerm]);

  const handleCompare = (keyboard: KeyboardType) => {
    if (keyboardsToCompare.some(k => k.id === keyboard.id)) {
      // Удаляем из сравнения
      setKeyboardsToCompare(keyboardsToCompare.filter(k => k.id !== keyboard.id));
    } else {
      // Добавляем к сравнению (максимум 3)
      if (keyboardsToCompare.length < 3) {
        setKeyboardsToCompare([...keyboardsToCompare, keyboard]);
      }
    }
  };

  const handleRemoveFromCompare = (id: number) => {
    setKeyboardsToCompare(keyboardsToCompare.filter(k => k.id !== id));
  };

  const isInCompare = (id: number) => {
    return keyboardsToCompare.some(k => k.id === id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-primary">KeyboardFinder</h1>
            <Button 
              variant="outline" 
              size="sm" 
              className="md:hidden"
              onClick={() => setCompareOpen(true)}
              disabled={keyboardsToCompare.length === 0}
            >
              <Icon name="Scale" className="mr-1 h-4 w-4" />
              Сравнить ({keyboardsToCompare.length})
            </Button>
          </div>
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Поиск клавиатуры..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full h-10 px-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Icon name="Search" className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
          </div>
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setCompareOpen(true)}
              disabled={keyboardsToCompare.length === 0}
            >
              <Icon name="Scale" className="mr-1 h-4 w-4" />
              Сравнить ({keyboardsToCompare.length})
            </Button>
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Боковая колонка с фильтрами */}
          <div className="w-full md:w-1/4 lg:w-1/5">
            <FilterSection onFilterChange={handleFilterChange} />
          </div>
          
          {/* Основной контент с карточками */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Каталог клавиатур</h2>
                <span className="text-sm text-muted-foreground">
                  Найдено: {filteredKeyboards.length}
                </span>
              </div>
            </div>
            
            {filteredKeyboards.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredKeyboards.map(keyboard => (
                  <KeyboardCard 
                    key={keyboard.id} 
                    keyboard={keyboard} 
                    onCompare={handleCompare}
                    isCompared={isInCompare(keyboard.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                <Icon name="Search" className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Ничего не найдено</h3>
                <p className="text-muted-foreground">
                  Попробуйте изменить параметры фильтрации или поисковый запрос
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Футер */}
      <footer className="bg-white shadow-sm mt-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2025 KeyboardFinder — сервис подбора клавиатур
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                О проекте
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Контакты
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Помощь
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Сравнение клавиатур в выдвижной панели */}
      <CompareDrawer 
        open={compareOpen} 
        onOpenChange={setCompareOpen}
        keyboardsToCompare={keyboardsToCompare}
        onRemove={handleRemoveFromCompare}
      />
    </div>
  );
};

export default Index;
