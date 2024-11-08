import React, { useEffect } from "react"

import Loading from "../components/layout/Loading"
import Navbar from "../components/layout/Navbar"
import useMyBlogs from "../hooks/useMyBlogs"
import RenderBlogs from "../components/blogs/RenderBlogs"

function MyBlogs() {
  const { blogs, error, getMyBlogs, loading } = useMyBlogs()

  useEffect(() => {
    getMyBlogs()
  }, [])

  return (
    <>
      <Navbar />
      <main className="lg:max-w-4xl md:max-w-2xl sm:max-w-xl  mx-auto px-2">
        <h2 className="text-3xl font-serif font-semibold my-4">My Blogs</h2>

        {loading && <Loading />}

        {blogs && <RenderBlogs blogs={blogs} />}
      </main>
    </>
  )
}

export default MyBlogs
