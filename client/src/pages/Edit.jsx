import React, { useEffect, useState } from "react"
import Navbar from "../components/layout/Navbar"
import MarkdownEditor from "../components/layout/MarkdownEditor"
import { useNavigate, useParams } from "react-router-dom"
import useBlog from "../hooks/useBlog"
import useEdit from "../hooks/useEdit"

function Edit() {
  const { id } = useParams()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState(null)

  const { edit, loading, error } = useEdit()
  // @ts-ignore
  const { blog, error: blogError, getBlog, loading: blogLoading } = useBlog()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.set("title", title)
    formData.set("content", content)
    if (image) {
      formData.set("image", image)
    }

    edit(id, formData).then(() => {
      navigate(`/blogs/${id}`)
    })
  }

  useEffect(() => {
    getBlog(id)
  }, [id])

  useEffect(() => {
    if (blog) {
      // @ts-ignore
      setTitle(blog?.title ?? "")
      // @ts-ignore
      setContent(blog?.content ?? "")
      setImage(null)
    }
  }, [blog])

  return (
    <>
      <Navbar />
      <main className="lg:max-w-4xl md:max-w-2xl sm:max-w-xl  mx-auto px-2">
        <h2 className="text-3xl font-serif font-semibold mb-4">
          Edit the blog
        </h2>

        <form
          onSubmit={handleSubmit}
          className={`gap-2 flex flex-col ${
            loading || blogLoading ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          <input
            type="file"
            className="w-full p-2 border rounded-lg"
            onChange={(e) =>
              setImage(
                // @ts-ignore
                e.target.files?.[0] ?? null
              )
            }
          />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="w-full p-2 border rounded-lg"
            required
            placeholder="Title"
          />

          <MarkdownEditor value={content} onChange={setContent} />

          <button className="w-full bg-black text-white py-2 rounded-lg">
            Publish
          </button>

          {error && <p className="text-red-500 mt-5">{error}</p>}
          {blogError && <p className="text-red-500 mt-5">{blogError}</p>}
        </form>
      </main>
    </>
  )
}

export default Edit
