import { create } from "zustand";

import { apiProfileInfo } from "@api";

export const profileStore = create((set) => ({
  user: null,
  isLoading: false,

  apiProfile: async () => {
    set({isLoading: true})
    try {
      const { data } = await apiProfileInfo()
      set({user: data})
    } finally {
      set({isLoading: false})
    }
  },

  clearUser: () => set({ user: null }),
}))