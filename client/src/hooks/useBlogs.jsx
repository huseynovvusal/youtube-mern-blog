import { useState } from "react"

const useBlogs = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [blogs, setBlogs] = useState([])

  const getBlogs = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("http://localhost:5000/api/blogs")

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error)
      }

      setBlogs(data.data)
    } catch (error) {
      setError(error.message)
    }

    setLoading(false)
  }

  return { getBlogs, loading, error, blogs }
}

export default useBlogs
