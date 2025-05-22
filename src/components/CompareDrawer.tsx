
import { useEffect, useState } from "react";
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { KeyboardType } from "@/components/KeyboardCard";
import Icon from "@/components/ui/icon";

interface CompareDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  keyboardsToCompare: KeyboardType[];
  onRemove: (id: number) => void;
}

const CompareDrawer = ({ open, onOpenChange, keyboardsToCompare, onRemove }: CompareDrawerProps) => {
  const [compareData, setCompareData] = useState<KeyboardType[]>([]);

  useEffect(() => {
    setCompareData(keyboardsToCompare);
  }, [keyboardsToCompare]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };
  
  // Преобразователи для типа и назначения
  const getTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      'full': 'Полноразмерная',
      'tenkeyless': 'Без цифрового блока',
      'compact': 'Компактная',
      'split': 'Разделенная'
    };
    return types[type] || type;
  };
  
  const getPurposeLabel = (purpose: string) => {
    const purposes: Record<string, string> = {
      'gaming': 'Игровая',
      'office': 'Офисная',
      'programming': 'Для программирования',
      'multimedia': 'Мультимедийная'
    };
    return purposes[purpose] || purpose;
  };

  if (compareData.length === 0) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Сравнение клавиатур</SheetTitle>
            <SheetDescription>
              Выберите клавиатуры для сравнения характеристик
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col items-center justify-center h-[60vh]">
            <Icon name="Scale" className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-center text-muted-foreground">
              Добавьте клавиатуры для сравнения
            </p>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline" className="w-full">Закрыть</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Сравнение клавиатур</SheetTitle>
          <SheetDescription>
            Сравнение характеристик выбранных клавиатур
          </SheetDescription>
        </SheetHeader>
        
        <div className="py-4 space-y-4">
          {compareData.map((keyboard) => (
            <div key={keyboard.id} className="relative border rounded-lg p-4 mb-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2" 
                onClick={() => onRemove(keyboard.id)}
              >
                <Icon name="X" className="h-4 w-4" />
              </Button>
              
              <div className="flex items-center mb-3">
                <div className="w-16 h-16 bg-muted rounded overflow-hidden mr-3">
                  <img 
                    src={keyboard.image} 
                    alt={keyboard.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{keyboard.name}</h3>
                  <p className="text-primary font-bold text-sm">
                    {formatPrice(keyboard.price)} ₽
                  </p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Тип:</span>
                  <span>{getTypeLabel(keyboard.type)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Назначение:</span>
                  <span>{getPurposeLabel(keyboard.purpose)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Механическая:</span>
                  <span>{keyboard.mechanical ? 'Да' : 'Нет'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Подсветка:</span>
                  <span>{keyboard.backlight ? 'Да' : 'Нет'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Беспроводная:</span>
                  <span>{keyboard.wireless ? 'Да' : 'Нет'}</span>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t">
                <div className="text-xs font-medium mb-1">Особенности:</div>
                <ul className="text-xs space-y-1">
                  {keyboard.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Icon name="Check" className="h-3 w-3 text-green-500 mr-1 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline" className="w-full">Закрыть</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CompareDrawer;
