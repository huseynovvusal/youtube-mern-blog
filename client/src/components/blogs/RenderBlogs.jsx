import React from "react"
import Blog from "../layout/Blog"
import useAuth from "../../store/auth"

function RenderBlogs({ blogs }) {
  const { user } = useAuth((state) => state)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 mt-4">
      {blogs.map(({ _id, imageUrl, title, content, author }) => (
        <Blog
          key={_id}
          imageUrl={imageUrl}
          title={title}
          content={content}
          id={_id}
          // @ts-ignore
          owner={author._id === user._id}
        />
      ))}
    </div>
  )
}

export default RenderBlogs
