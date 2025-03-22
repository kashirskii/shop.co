import { useState } from "react";

export interface useMultiSelectReturn<T> {
  selectedItems: Set<T>;
  selectItem: (item: T) => T;
  isSelected: (item: T) => boolean;
  clearSelection: () => void;
}

export const useMultiSelect = <T,>(initialSelected: Set<T> = new Set()) => {
  const [selectedItems, setSelectedItems] = useState(initialSelected);

  const selectItem = (item: T) => {
    setSelectedItems((prevValue) => {
      const newSet = new Set(prevValue);
      if (newSet.has(item)) {
        newSet.delete(item);
      } else {
        newSet.add(item);
      }
      return newSet;
    });

    return item;
  };

  const isSelected = (item: T) => selectedItems.has(item);

  const clearSelection = () => setSelectedItems(new Set());

  return {
    selectedItems,
    selectItem,
    isSelected,
    clearSelection,
  } as useMultiSelectReturn<T>;
};
