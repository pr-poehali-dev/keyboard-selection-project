import { useState, useEffect } from "react";
import FilterSection from "@/components/FilterSection";
import CompareDrawer from "@/components/CompareDrawer";
import { useKeyboardFilters } from "@/hooks/useKeyboardFilters";
import { useKeyboardCompare } from "@/hooks/useKeyboardCompare";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import KeyboardCatalog from "@/components/keyboard/KeyboardCatalog";

const Index = () => {
  // Хуки для фильтрации и сравнения клавиатур
  const { filteredKeyboards, searchTerm, setSearchTerm, handleFilterChange } =
    useKeyboardFilters();
  const {
    keyboardsToCompare,
    compareOpen,
    isInCompare,
    handleCompare,
    handleRemoveFromCompare,
    setCompareOpen,
  } = useKeyboardCompare();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер с поиском и кнопкой сравнения */}
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        compareCount={keyboardsToCompare.length}
        onCompareOpen={() => setCompareOpen(true)}
      />

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Боковая колонка с фильтрами */}
          <div className="w-full md:w-1/4 lg:w-1/5">
            <FilterSection onFilterChange={handleFilterChange} />
          </div>

          {/* Каталог клавиатур */}
          <KeyboardCatalog
            keyboards={filteredKeyboards}
            onCompare={handleCompare}
            isInCompare={isInCompare}
          />
        </div>
      </main>

      {/* Футер */}
      <Footer />

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
