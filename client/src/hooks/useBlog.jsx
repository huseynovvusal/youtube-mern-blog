import { useState } from "react"
import { API_URL } from "../config"

const useBlog = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [blog, setBlog] = useState(null)

  const getBlog = async (id) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}/api/blogs/${id}`)

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error)
      }

      setBlog(data.data)
    } catch (error) {
      setError(error.message)
    }

    setLoading(false)
  }

  return { getBlog, loading, error, blog }
}

export default useBlog
