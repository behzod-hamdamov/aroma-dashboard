import { api } from "./axios"

import { endpoints } from "./endpoints"

import { Toast } from "@utils"

export const apiGetAllBanners = async (params) => {
  try {
    const { data } = await api.get(endpoints.banners.banners_get_all, params)
    if (data.success) {
      return data
    }
  } catch (error) {
    Toast.error(error?.response?.data?.error?.message)
  }
}