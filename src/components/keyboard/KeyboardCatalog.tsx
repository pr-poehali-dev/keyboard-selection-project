
import Icon from "@/components/ui/icon";
import KeyboardCard, { KeyboardType } from "@/components/KeyboardCard";

interface KeyboardCatalogProps {
  keyboards: KeyboardType[];
  onCompare: (keyboard: KeyboardType) => void;
  isInCompare: (id: number) => boolean;
}

const KeyboardCatalog = ({ keyboards, onCompare, isInCompare }: KeyboardCatalogProps) => {
  return (
    <div className="w-full md:w-3/4 lg:w-4/5">
      <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Каталог клавиатур</h2>
          <span className="text-sm text-muted-foreground">
            Найдено: {keyboards.length}
          </span>
        </div>
      </div>
      
      {keyboards.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {keyboards.map(keyboard => (
            <KeyboardCard 
              key={keyboard.id} 
              keyboard={keyboard} 
              onCompare={onCompare}
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
  );
};

export default KeyboardCatalog;
