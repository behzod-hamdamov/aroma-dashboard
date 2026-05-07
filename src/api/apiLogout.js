import { api } from "./axios"

import { endpoints } from "./endpoints"

import { tokenService, Toast } from "@utils"

export const apiLogout = async () => {
  try {
    const { data } = await api.get(endpoints.auth.logout)
    if (data?.success) {
      tokenService.clearTokens()
      window.location.href = '/login'
      Toast.success("Akkauntdan chiqdingiz !")
    }
  } catch (error) {
    Toast.error(error?.response?.data?.error?.message)
  }
}