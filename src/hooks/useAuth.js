import { api, endpoints } from "@api"

import { tokenService, Toast } from "@utils"

export const useLogin = async (loginData) => {
  try {
    const { data } = await api.post(endpoints.auth.login, loginData)
    tokenService.setTokens(data.data.token, data.data.refreshToken)
    return data
  } catch (error) {
    Toast.error(error.response.data.error.message)
  }
}

export const useLogout = async () => {
  try {
    await api.get(endpoints.auth.logout)
  } finally {
    tokenService.clearTokens()
    window.location.href = '/login'
  }
}