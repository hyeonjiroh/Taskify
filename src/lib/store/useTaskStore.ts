import { create } from "zustand";

interface TaskStore {
  selectedTaskId: number | null;
  setSelectedTaskId: (id: number | null) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  selectedTaskId: null,
  setSelectedTaskId: (id) => set({ selectedTaskId: id }),
}));
