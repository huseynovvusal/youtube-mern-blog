import React from "react"
import { limitText } from "../../utils/text"
import useDelete from "../../hooks/useDelete"

function Blog({ imageUrl, title, content, id, owner = false }) {
  const { deleteBlog, error, loading } = useDelete()

  const handleDelete = () => {
    if (window.confirm("Are you sure to delete this blog?")) {
      deleteBlog(id)
      window.location.reload()
    }
  }

  return (
    <div className="relative">
      {owner && (
        <div className="text-2xl flex gap-2 absolute right-1 top-1">
          <a
            className="w-8 aspect-square bg-gray-100 flex items-center justify-center text-gray-800 rounded-md shadow-md text-base"
            href={`/blogs/edit/${id}`}
          >
            <i className="bx bx-pencil"></i>
          </a>
          <button
            onClick={handleDelete}
            className="w-8 aspect-square z-10 bg-red-100 flex items-center justify-center text-red-800 rounded-md shadow-md text-base"
          >
            <i className="bx bx-trash"></i>
          </button>
        </div>
      )}

      <a
        className={`${loading ? "pointer-events-none opacity-50" : ""}`}
        href={`/blogs/${id}`}
      >
        <div>
          <img
            className="w-full aspect-[16/10] object-cover rounded-sm"
            src={imageUrl}
            alt={title}
          />

          <h3 className="text-xl font-serif mb-1 mt-4">
            {limitText(title, 40)}
          </h3>

          <p
            className="text-gray-500 font-thin text-xs"
            dangerouslySetInnerHTML={{
              __html: limitText(content, 100),
            }}
          />
        </div>
      </a>
    </div>
  )
}

export default Blog
