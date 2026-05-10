import { create } from "zustand";

import { apiGetAllBanners } from "@api";

export const bannersStore = create((set, get) => ({
  banners: null,
  page: 1,
  search: "",
  limit: 10,
  isLoading: false,
  pagination: null,

  changePages: (page) => {
    set({page})
    get().apiGetBanners()
  },

  searchBanners: (search) => {
    set({page: 1, search})
    get().apiGetBanners()
  },
  
  apiGetBanners: async () => {
    const { page, search, limit } = get()
    set({isLoading: true})
    try {
      const { data } = await apiGetAllBanners({page, search, limit})
      set({
        banners: data,
        pagination: data.pagination,
      })
    } finally {
      set({isLoading: false})
    }
  }
}))