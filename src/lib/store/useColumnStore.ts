import { create } from "zustand";

interface ColumnStore {
  selectedColumnTitle: string | null;
  setSelectedColumnTitle: (title: string | null) => void;
}

export const useColumnStore = create<ColumnStore>((set) => ({
  selectedColumnTitle: null,
  setSelectedColumnTitle: (title) => set({ selectedColumnTitle: title }),
}));
