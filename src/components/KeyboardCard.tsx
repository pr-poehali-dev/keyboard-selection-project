
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export type KeyboardType = {
  id: number;
  name: string;
  image: string;
  price: number;
  type: string;
  purpose: string;
  backlight: boolean;
  wireless: boolean;
  mechanical: boolean;
  features: string[];
  description: string;
};

interface KeyboardCardProps {
  keyboard: KeyboardType;
  onCompare: (keyboard: KeyboardType) => void;
  isCompared: boolean;
}

const KeyboardCard = ({ keyboard, onCompare, isCompared }: KeyboardCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };
  
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

  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300 overflow-hidden group">
      <CardHeader className="p-4 pb-0">
        <div className="relative h-48 overflow-hidden rounded-md bg-muted mb-2">
          <img 
            src={keyboard.image} 
            alt={keyboard.name} 
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardTitle className="text-lg">{keyboard.name}</CardTitle>
        <CardDescription className="line-clamp-2 text-sm mt-1">
          {keyboard.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <div className="flex flex-wrap gap-1 mb-3">
          {keyboard.mechanical && (
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              Механическая
            </Badge>
          )}
          {keyboard.backlight && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Подсветка
            </Badge>
          )}
          {keyboard.wireless && (
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Беспроводная
            </Badge>
          )}
        </div>
        
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Тип:</span>
            <span className="font-medium">{getTypeLabel(keyboard.type)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Назначение:</span>
            <span className="font-medium">{getPurposeLabel(keyboard.purpose)}</span>
          </div>
          <div className="mt-2 pt-2 border-t">
            <div className="text-xs text-muted-foreground">Особенности:</div>
            <ul className="text-xs mt-1 space-y-1">
              {keyboard.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Icon name="Check" className="h-3 w-3 text-green-500 mr-1 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex-shrink-0 flex items-center justify-between">
        <div className="text-lg font-bold text-primary">
          {formatPrice(keyboard.price)} ₽
        </div>
        <Button 
          variant={isCompared ? "default" : "outline"} 
          size="sm" 
          onClick={() => onCompare(keyboard)}
        >
          {isCompared ? (
            <>
              <Icon name="Check" className="mr-1 h-4 w-4" />
              Сравнивается
            </>
          ) : (
            <>
              <Icon name="Plus" className="mr-1 h-4 w-4" />
              Сравнить
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default KeyboardCard;
