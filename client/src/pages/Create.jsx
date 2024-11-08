import React, { useState } from "react"
import Navbar from "../components/layout/Navbar"
import MarkdownEditor from "../components/layout/MarkdownEditor"
import useCreate from "../hooks/useCrate"
import { useNavigate } from "react-router-dom"

function Create() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState(null)

  const { create, loading, error } = useCreate()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.set("title", title)
    formData.set("content", content)
    if (image) {
      formData.set("image", image)
    }

    create(formData).then(() => {
      navigate("/")
    })
  }

  return (
    <>
      <Navbar />
      <main className="lg:max-w-4xl md:max-w-2xl sm:max-w-xl  mx-auto px-2">
        <h2 className="text-5xl font-serif font-semibold mb-8">
          Create a blog
        </h2>

        <form
          onSubmit={handleSubmit}
          className={`gap-2 flex flex-col ${
            loading ? "opacity-50 pointer-events-none" : ""
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
        </form>
      </main>
    </>
  )
}

export default Create
