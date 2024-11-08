import { useState } from "react"
import useAuth from "../store/auth"
import { API_URL } from "../config"

const useSignup = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { setUser } = useAuth((state) => state)

  const signup = async (email, username, password) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
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

  return { signup, loading, error }
}

export default useSignup
