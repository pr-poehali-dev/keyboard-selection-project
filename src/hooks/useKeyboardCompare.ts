
import { useState } from "react";
import { KeyboardType } from "@/components/KeyboardCard";

interface UseKeyboardCompareResult {
  keyboardsToCompare: KeyboardType[];
  compareOpen: boolean;
  isInCompare: (id: number) => boolean;
  handleCompare: (keyboard: KeyboardType) => void;
  handleRemoveFromCompare: (id: number) => void;
  setCompareOpen: (open: boolean) => void;
}

export const useKeyboardCompare = (): UseKeyboardCompareResult => {
  const [keyboardsToCompare, setKeyboardsToCompare] = useState<KeyboardType[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);

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

  return {
    keyboardsToCompare,
    compareOpen,
    isInCompare,
    handleCompare,
    handleRemoveFromCompare,
    setCompareOpen
  };
};
