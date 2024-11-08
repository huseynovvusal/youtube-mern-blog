import { useState } from "react"
import { API_URL } from "../config"
import useAuth from "../store/auth"

const useLogout = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { setUser } = useAuth((state) => state)

  const logout = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}/api/auth/logout`)

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error)
      }

      localStorage.removeItem("user")
      setUser(null)
    } catch (error) {
      setError(error.message)
    }

    setLoading(false)
  }

  return { logout, loading, error }
}

export default useLogout
