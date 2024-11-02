import React, { useEffect } from "react"
import useAuth from "../../store/auth"

function Navbar() {
  const user = useAuth((state) => state.user)

  // !
  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-[rgba(255,255,255,0.75)] backdrop-blur-md">
      <nav className="flex justify-between items-center lg:max-w-4xl md:max-w-2xl sm:max-w-xl  mx-auto py-6 px-2">
        <h1 className="text-2xl font-semibold font-serif select-none">
          MERN Blog
        </h1>
        <ul className="flex items-center gap-8 text-base">
          <li className="hover:text-gray-600">
            <a href="/">Home</a>
          </li>
          {user ? (
            <>
              <li className="hover:text-gray-600">
                <a href="/login">My Blogs</a>
              </li>
              <li className="hover:text-gray-600">
                <img
                  className="w-10 h-10 rounded-full select-none pointer-events-none"
                  src={`https://ui-avatars.com/api/?name=${user?.username}&length=1&background=random`}
                  alt={user?.username}
                />
              </li>
            </>
          ) : (
            <>
              <li className="hover:text-gray-600">
                <a href="/login">Login</a>
              </li>
              <li className="hover:text-gray-600">
                <a href="/signup">Signup</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
