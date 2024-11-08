import { useState } from "react"

const useMyBlogs = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [blogs, setBlogs] = useState([])

  const getMyBlogs = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("http://localhost:5000/api/blogs/my-blogs", {
        credentials: "include",
      })

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

  return { getMyBlogs, loading, error, blogs }
}

export default useMyBlogs
