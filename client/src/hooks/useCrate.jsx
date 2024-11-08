import { useState } from "react"

const useCreate = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const create = async (formData) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("http://localhost:5000/api/blogs/create", {
        method: "POST",
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

  return { create, loading, error }
}

export default useCreate
