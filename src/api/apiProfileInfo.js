import { api } from "./axios"

import { endpoints } from "./endpoints"

export const apiProfileInfo = async () => {
  try {
    const { data } = await api.get(endpoints.profile.profile_info)
    return data
  } catch (error) {
    Toast.error(error.response.data.error.message)
  }
}