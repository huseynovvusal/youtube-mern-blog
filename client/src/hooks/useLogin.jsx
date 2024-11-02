import { useState } from "react"
import useAuth from "../store/auth"

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { setUser } = useAuth((state) => state)

  const login = async (username, password) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error)
      }

      localStorage.setItem("user", JSON.stringify(data.data))
      setUser(data.data)
    } catch (error) {
      setError(error.message)
    }

    setLoading(false)
  }

  return { login, loading, error }
}

export default useLogin
