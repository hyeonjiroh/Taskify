import { create } from "zustand";

export type AlertKey =
  | "passwordMismatch"
  | "emailDuplicated"
  | "signupSuccess"
  | "deleteColumn"
  | null;

type AlertState = {
  currentAlert: AlertKey;
  openAlert: (key: Exclude<AlertKey, null>) => void;
  closeAlert: () => void;
};

export const usePathStore = create<AlertState>((set) => ({
  currentAlert: null,
  openAlert: (key) => set({ currentAlert: key }),
  closeAlert: () => set({ currentAlert: null }),
}));
