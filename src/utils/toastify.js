import { toast } from "react-toastify"

const defOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}

export const Toast = {
  success: (message, options = {}) => {
    toast.success(message, {...defOptions, ...options})
  },
  error: (message, options = {}) => {
    toast.error(message, {...defOptions, ...options})
  },
}