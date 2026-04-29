import { useState } from "react"

export const useForm = () => {
  const [values, setValues] = useState({login: "", password: ""})
  const [errors, setErrors] = useState({login: false, password: false})
  const [validated, setvalidated] = useState(false)

  const validate = () => {
    let isReady = true
    if (!values.login.length) {
      setErrors(prev => ({...prev, login: true}))
      isReady = false
    }
    if (!values.password.length) {
      setErrors(prev => ({...prev, password: true}))
      isReady = false
    }

    setvalidated(true)
    return isReady
  }

  const handleChange = (e) => {
    const inputValue = e.target.value
    setValues(prev => ({...prev, [e.target.name]: e.target.value }))
    
    if (!inputValue.length && validated) {
      setErrors(prev => ({...prev, [e.target.name]: true}))
      return
    }

    if (e.target.name === "login" && errors.login && inputValue) {
      setErrors(prev => ({...prev, login: false}))
    } else if (e.target.name === "password" && errors.password && inputValue) {
      setErrors(prev => ({...prev, password: false}))
    }
  }

  return {values, errors, handleChange, validate}
}