import { api } from "./axios"

import { endpoints } from "./endpoints"

import { Toast } from "@utils"

export const apiChangePassword = async (formData) => {
  try {
    const { data } = await api.post(endpoints.profile.profile_password_change, formData)
    if (data?.success === true) {
      Toast.success("Parol muvaffaqiyatli almashtirildi !")
      return data?.success
    }
  } catch (error) {
    Toast.error(error?.response?.data?.error?.message)
  }
}