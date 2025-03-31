import { create } from "zustand";

export type AlertKey =
  | "passwordMismatch"
  | "emailDuplicated"
  | "signupSuccess"
  | "deleteColumn"
  | "loginSuccess"
  | "userNotFound"
  | "wrongPassword"
  | "profileUpdateSuccess"
  | "profileUpdateFailed"
  | null;

type AlertState = {
  currentAlert: AlertKey;
  openAlert: (key: Exclude<AlertKey, null>) => void;
  closeAlert: () => void;
};

export const useAlertStore = create<AlertState>((set) => ({
  currentAlert: null,
  openAlert: (key) => set({ currentAlert: key }),
  closeAlert: () => set({ currentAlert: null }),
}));
