import { create } from "zustand";

import { apiGetAllBanners } from "@api";

export const bannersStore = create((set, get) => ({
  banners: null,
  page: 1,
  search: "",
  limit: 10,
  isLoading: false,
  pagination: null,
  status: null,

  changePages: (page) => {
    set({ page })
    get().apiGetBanners()
  },

  changeStatus: (status) => {
    set({status})
    get().apiGetBanners()
  },

  searchItems: (search) => {
    set({ page: 1, search })
    get().apiGetBanners()
  },

  apiGetBanners: async () => {
    const { page, search, limit, status } = get()
    const params = { page, search, limit }

    set({ isLoading: true })
    try {
      const { data } = await apiGetAllBanners(typeof status !== "number" ? params : { ...params, status })
      set({
        banners: data,
        pagination: data.pagination,
      })
    } finally {
      set({ isLoading: false })
    }
  }
}))