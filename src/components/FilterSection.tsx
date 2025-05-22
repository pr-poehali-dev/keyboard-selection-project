
import { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FilterSection = ({ onFilterChange }: { onFilterChange: (filters: any) => void }) => {
  const [filters, setFilters] = useState({
    type: "",
    purpose: "",
    price: [0, 15000],
    backlight: false,
    wireless: false,
    mechanical: false,
  });

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (value: number[]) => {
    handleFilterChange('price', value);
  };

  const handleReset = () => {
    const resetFilters = {
      type: "",
      purpose: "",
      price: [0, 15000],
      backlight: false,
      wireless: false,
      mechanical: false,
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Фильтры</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Тип клавиатуры</Label>
          <Select 
            value={filters.type} 
            onValueChange={(value) => handleFilterChange('type', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Выберите тип" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="full">Полноразмерная</SelectItem>
                <SelectItem value="tenkeyless">Без цифрового блока</SelectItem>
                <SelectItem value="compact">Компактная</SelectItem>
                <SelectItem value="split">Разделенная</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Назначение</Label>
          <Select 
            value={filters.purpose} 
            onValueChange={(value) => handleFilterChange('purpose', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Выберите назначение" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="gaming">Игровая</SelectItem>
                <SelectItem value="office">Офисная</SelectItem>
                <SelectItem value="programming">Для программирования</SelectItem>
                <SelectItem value="multimedia">Мультимедийная</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">
            Цена: {filters.price[0]} ₽ - {filters.price[1]} ₽
          </Label>
          <Slider 
            defaultValue={[0, 15000]} 
            max={15000} 
            step={500}
            value={filters.price}
            onValueChange={handlePriceChange}
            className="py-4"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="backlight" 
              checked={filters.backlight} 
              onCheckedChange={(checked) => 
                handleFilterChange('backlight', checked === true)
              } 
            />
            <Label htmlFor="backlight" className="text-sm font-medium">Подсветка</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="wireless" 
              checked={filters.wireless} 
              onCheckedChange={(checked) => 
                handleFilterChange('wireless', checked === true)
              } 
            />
            <Label htmlFor="wireless" className="text-sm font-medium">Беспроводная</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="mechanical" 
              checked={filters.mechanical} 
              onCheckedChange={(checked) => 
                handleFilterChange('mechanical', checked === true)
              } 
            />
            <Label htmlFor="mechanical" className="text-sm font-medium">Механическая</Label>
          </div>
        </div>

        <Button 
          variant="outline" 
          className="w-full mt-4"
          onClick={handleReset}
        >
          <Icon name="RefreshCw" className="mr-2 h-4 w-4" />
          Сбросить фильтры
        </Button>
      </div>
    </div>
  );
};

export default FilterSection;
