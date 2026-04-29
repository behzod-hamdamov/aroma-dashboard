import { api } from "@api/axios"

import { endpoints } from "@api/endpoints"

import { tokenService } from "@utils/tokenService"

import { toast } from "react-toastify"

export const useLogin = async (loginData) => {
  try {
    const { data } = await api.post(endpoints.auth.login, loginData)
    tokenService.setTokens(data.data.token, data.data.refreshToken)
    return data
  } catch (error) {
    toast.error(error.response.data.error.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
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