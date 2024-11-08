import { useState } from "react"
import { API_URL } from "../config"

const useDelete = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const deleteBlog = async (id) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}/api/blogs/${id}/delete`, {
        method: "DELETE",
        credentials: "include",
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error)
      }
    } catch (error) {
      setError(error.message)
    }

    setLoading(false)
  }

  return { deleteBlog, loading, error }
}

export default useDelete
