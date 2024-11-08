import React, { useEffect } from "react"
import Blog from "../layout/Blog"
import useBlogs from "../../hooks/useBlogs"
import useAuth from "../../store/auth"
import RenderBlogs from "../blogs/RenderBlogs"
import Loading from "../layout/Loading"

function Blogs() {
  const { getBlogs, blogs, error, loading } = useBlogs()

  const { user } = useAuth((state) => state)

  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <div className="my-10">
      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-3xl">Latest Blogs</h2>
        <p className="text-sm font-thin text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          placeat.
        </p>
      </div>

      {loading ? <Loading /> : <>{blogs && <RenderBlogs blogs={blogs} />}</>}
    </div>
  )
}

export default Blogs
