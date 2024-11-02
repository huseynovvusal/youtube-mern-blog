import React, { useEffect } from "react"
import Blog from "../layout/Blog"
import useBlogs from "../../hooks/useBlogs"

function Blogs() {
  const { getBlogs, blogs, error, loading } = useBlogs()

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

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 mt-4">
          {blogs &&
            blogs.map(({ _id, imageUrl, title, content }) => (
              <Blog
                key={_id}
                imageUrl={imageUrl}
                title={title}
                content={content}
              />
            ))}
        </div>
      )}
    </div>
  )
}

export default Blogs
