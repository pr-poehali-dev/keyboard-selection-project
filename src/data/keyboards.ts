
import { KeyboardType } from "@/components/KeyboardCard";

export const keyboards: KeyboardType[] = [
  {
    id: 1,
    name: "Logitech G915 TKL",
    image: "https://images.unsplash.com/photo-1631669234890-15237c6d28b6?q=80&w=1000",
    price: 14990,
    type: "tenkeyless",
    purpose: "gaming",
    backlight: true,
    wireless: true,
    mechanical: true,
    features: [
      "Низкопрофильные механические переключатели GL",
      "Беспроводное подключение LIGHTSPEED",
      "RGB-подсветка LIGHTSYNC",
      "Корпус из алюминиевого сплава",
      "Время работы до 40 часов"
    ],
    description: "Беспроводная механическая игровая клавиатура с низкопрофильными переключателями и RGB-подсветкой."
  },
  {
    id: 2,
    name: "Keychron K2",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1000",
    price: 7490,
    type: "tenkeyless",
    purpose: "programming",
    backlight: true,
    wireless: true,
    mechanical: true,
    features: [
      "Переключатели Gateron Red/Blue/Brown",
      "Подключение по Bluetooth и USB-C",
      "Подсветка белая или RGB",
      "Совместимость с macOS и Windows",
      "Алюминиевая рамка"
    ],
    description: "Беспроводная механическая клавиатура с компактным дизайном, идеальная для программистов."
  },
  {
    id: 3,
    name: "HyperX Alloy Origins Core",
    image: "https://images.unsplash.com/photo-1595044426077-d36d9236d44a?q=80&w=1000",
    price: 8990,
    type: "tenkeyless",
    purpose: "gaming",
    backlight: true,
    wireless: false,
    mechanical: true,
    features: [
      "Фирменные переключатели HyperX",
      "Полностью алюминиевый корпус",
      "RGB-подсветка с эффектами",
      "Съемный USB-C кабель",
      "Настройка через ПО NGENUITY"
    ],
    description: "Компактная игровая механическая клавиатура с прочным алюминиевым корпусом и RGB-подсветкой."
  },
  {
    id: 4,
    name: "Microsoft Ergonomic Keyboard",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?q=80&w=1000",
    price: 4990,
    type: "full",
    purpose: "office",
    backlight: false,
    wireless: false,
    mechanical: false,
    features: [
      "Эргономичный дизайн",
      "Встроенная подставка для запястий",
      "Мультимедийные клавиши",
      "Цифровой блок",
      "Совместимость с Windows"
    ],
    description: "Эргономичная клавиатура для офисной работы с разделенной клавиатурной зоной для снижения нагрузки на запястья."
  },
  {
    id: 5,
    name: "Ducky One 2 Mini",
    image: "https://images.unsplash.com/photo-1607355739828-0bf365440db5?q=80&w=1000",
    price: 9490,
    type: "compact",
    purpose: "gaming",
    backlight: true,
    wireless: false,
    mechanical: true,
    features: [
      "Переключатели Cherry MX",
      "Компактный 60% форм-фактор",
      "PBT двойного литья колпачки клавиш",
      "RGB-подсветка",
      "Функциональные слои клавиш"
    ],
    description: "Компактная 60% механическая клавиатура с высоким качеством сборки и яркой RGB-подсветкой."
  },
  {
    id: 6,
    name: "Razer BlackWidow V3",
    image: "https://images.unsplash.com/photo-1615869442320-631e6e9efbbb?q=80&w=1000",
    price: 11990,
    type: "full",
    purpose: "gaming",
    backlight: true,
    wireless: false,
    mechanical: true,
    features: [
      "Механические переключатели Razer",
      "Chroma RGB-подсветка",
      "Медиаклавиши с колесиком громкости",
      "Эргономичная подставка для запястий",
      "Прочная конструкция"
    ],
    description: "Полноразмерная игровая механическая клавиатура с RGB-подсветкой и медиаклавишами."
  },
  {
    id: 7,
    name: "Apple Magic Keyboard",
    image: "https://images.unsplash.com/photo-1616417784503-33881ded6ac6?q=80&w=1000",
    price: 8990,
    type: "compact",
    purpose: "office",
    backlight: false,
    wireless: true,
    mechanical: false,
    features: [
      "Низкопрофильные ножничные переключатели",
      "Беспроводное подключение Bluetooth",
      "Встроенный аккумулятор",
      "Зарядка через Lightning",
      "Тонкий алюминиевый дизайн"
    ],
    description: "Беспроводная клавиатура от Apple с элегантным минималистичным дизайном и длительным временем работы."
  },
  {
    id: 8,
    name: "Kinesis Advantage2",
    image: "https://images.unsplash.com/photo-1542728928-0d0dda3297d7?q=80&w=1000",
    price: 19990,
    type: "split",
    purpose: "programming",
    backlight: false,
    wireless: false,
    mechanical: true,
    features: [
      "Эргономичный контурный дизайн",
      "Механические переключатели Cherry MX Brown",
      "Программируемая раскладка",
      "Встроенная память для настроек",
      "Разделенная клавиатура для естественного положения рук"
    ],
    description: "Эргономичная механическая клавиатура с контурным дизайном для комфортного набора текста в течение долгого времени."
  }
];
