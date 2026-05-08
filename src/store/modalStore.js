import { create } from "zustand"

export const modalStore = create((set) => ({
  modals: {},
  openModal: (name) => set((s) => ({ modals: { ...s.modals, [name]: true } })),
  closeModal: (name) => set((s) => ({ modals: { ...s.modals, [name]: false } })),
}));