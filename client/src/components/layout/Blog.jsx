import React from "react"

function Blog({ imageUrl, title, content }) {
  return (
    <div>
      <img
        className="w-full aspect-[16/10] object-cover rounded-sm"
        src={imageUrl}
        alt={title}
      />

      <h3 className="text-xl font-serif mb-1 mt-4">{title}</h3>

      <p className="text-gray-500 font-thin text-xs">{content}</p>
    </div>
  )
}

export default Blog
