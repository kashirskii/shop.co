import { create } from "zustand";

export type FilterValues = {
  color: string[];
  size: string[];
};

export type FilterStore = {
  filters: FilterValues;
  setColor: (colors: string[]) => void;
  setSize: (sizes: string[]) => void;
};

export const useFilter = create<FilterStore>((set) => ({
  filters: {
    color: [],
    size: [],
  },

  setColor: (colors) =>
    set((state) => ({
      filters: { ...state.filters, color: colors },
    })),

  setSize: (sizes) =>
    set((state) => ({
      filters: { ...state.filters, size: sizes },
    })),
}));
