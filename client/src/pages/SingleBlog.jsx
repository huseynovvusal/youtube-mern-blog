import React, { useEffect } from "react"
import Navbar from "../components/layout/Navbar"
import { useParams } from "react-router-dom"
import useBlog from "../hooks/useBlog"
import Loading from "../components/layout/Loading"
import { convertDate } from "../utils/date"

function SingleBlog() {
  const { id } = useParams()

  // @ts-ignore
  const { getBlog, blog, loading, error } = useBlog()

  useEffect(() => {
    getBlog(id)
  }, [])

  return (
    <>
      <Navbar />
      <main className="lg:max-w-4xl md:max-w-2xl sm:max-w-xl  mx-auto py-6 px-2">
        {loading && <Loading />}

        {blog && (
          <article className="flex flex-col gap-4">
            <img
              className="rounded-lg select-none pointer-events-none"
              src={
                // @ts-ignore
                blog?.imageUrl
              }
              // @ts-ignore
              alt={blog?.title}
            />

            <div>
              <h2 className="text-3xl font-medium font-serif">
                {
                  // @ts-ignore
                  blog?.title
                }
              </h2>
              <span className="text-xs text-gray-500 font-thin">
                {convertDate(
                  // @ts-ignore
                  blog?.createdAt
                )}
              </span>
            </div>
            <p
              className="text-gray-600 mb-4"
              dangerouslySetInnerHTML={{
                __html:
                  // @ts-ignore
                  blog?.content,
              }}
            />
          </article>
        )}
      </main>
    </>
  )
}

export default SingleBlog
