import { api } from "./axios"

import { endpoints } from "./endpoints"

import { Toast, tokenService } from "@utils"

export const apiLogin = async (loginData) => {
  try {
    const { data } = await api.post(endpoints.auth.login, loginData)
    tokenService.setTokens(data.data.token, data.data.refreshToken)
    if (data?.success) {
      Toast.success("Akkauntga kirdingiz !")
    }
    return data
  } catch (error) {
    Toast.error(error?.response?.data?.error?.message)
  }
}