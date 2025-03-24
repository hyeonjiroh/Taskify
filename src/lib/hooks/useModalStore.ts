import { create } from "zustand";

export type ModalKey = "createDashboard" | "modifyDashboard" | null;

type ModalState = {
  currentModal: ModalKey;
  openModal: (key: Exclude<ModalKey, null>) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  currentModal: null,
  openModal: (key) => set({ currentModal: key }),
  closeModal: () => set({ currentModal: null }),
}));
