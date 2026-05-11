import { api } from "./axios"

import { endpoints } from "./endpoints"

export const apiGetAllBanners = async (paramsData) => {
  try {
    const { data } = await api.get(endpoints.banners.banners_get_all, {
      params: { ...paramsData }
    })
    if (data.success) {
      return data
    }
  } catch (error) {
    return {
      data: {
        message: "Hozircha bo'sh",
        title: "Ro‘yxat tez orada kengaytiriladi",
      },
    }
  }
}