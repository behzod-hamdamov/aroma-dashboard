import { useState } from "react"

export const useForm = (formStucture, onSubmit) => {
  const [formData, setFormData] = useState(formStucture)
  const [formErrors, setFormErrors] = useState({})

  const handleValidate = () => {
    let completed = true

    for (const key in formData) {
      if (formData[key] === "") {
        setFormErrors(prev => ({ ...prev, [key]: true }))
        completed = false
      }
    }

    return completed
  }

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value.trimStart() }))
    setFormErrors(prev => ({ ...prev, [e.target.name]: false }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const completed = handleValidate()
    const data = Object.fromEntries(new FormData(e.target))
    if (completed) onSubmit?.(data)
  }

  return { setFormErrors, formErrors, handleInputChange, handleSubmit }
}