import { create } from "zustand";

interface ColumnStore {
  selectedColumnId: number | null;
  selectedColumnTitle: string | null;
  setSelectedColumnId: (id: number | null) => void;
  setSelectedColumnTitle: (title: string | null) => void;
}

export const useColumnStore = create<ColumnStore>((set) => ({
  selectedColumnId: null,
  selectedColumnTitle: null,
  setSelectedColumnId: (id) => set({ selectedColumnId: id }),
  setSelectedColumnTitle: (title) => set({ selectedColumnTitle: title }),
}));
