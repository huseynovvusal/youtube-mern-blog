import React from "react"
import { limitText } from "../../utils/text"

function Blog({ imageUrl, title, content, id }) {
  return (
    <a href={`/blogs/${id}`}>
      <div>
        <img
          className="w-full aspect-[16/10] object-cover rounded-sm"
          src={imageUrl}
          alt={title}
        />

        <h3 className="text-xl font-serif mb-1 mt-4">{limitText(title, 40)}</h3>

        <p
          className="text-gray-500 font-thin text-xs"
          dangerouslySetInnerHTML={{
            __html: limitText(content, 100),
          }}
        />
      </div>
    </a>
  )
}

export default Blog
