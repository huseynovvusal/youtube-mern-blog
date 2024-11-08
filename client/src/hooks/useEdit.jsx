import { useState } from "react"
import { API_URL } from "../config"

const useEdit = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const edit = async (id, formData) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}/api/blogs/${id}/update`, {
        method: "PUT",
        body: formData,
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

  return { edit, loading, error }
}

export default useEdit
