import { api } from "./axios"

import { endpoints } from "./endpoints"

import { tokenService, Toast } from "@utils"

export const apiLogout = async () => {
  try {
    const { data } = await api.get(endpoints.auth.logout)
    tokenService.clearTokens()
    window.location.href = '/login'
    Toast.success("Akkauntdan chiqdingiz !")
    return data
  } catch (error) {
    Toast.error(error?.response?.data?.error?.message)
  }
}