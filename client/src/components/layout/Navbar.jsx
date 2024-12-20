import React, { useEffect } from "react"
import useAuth from "../../store/auth"
import useLogout from "../../hooks/useLogout"

function Navbar() {
  const user = useAuth((state) => state.user)

  const { logout, error, loading } = useLogout()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="sticky z-50 top-0 left-0 w-full bg-[rgba(255,255,255,0.9)] backdrop-blur-sm">
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
                <a href="/my-blogs">My Blogs</a>
              </li>

              <li className="text-blue-900 transition-all hover:bg-blue-100 bg-blue-50 px-4 py-2 rounded-xl">
                <a href="/create">Create</a>
              </li>

              <li className="group hover:text-gray-600 relative">
                <img
                  className="w-10 h-10 rounded-full select-none pointer-events-none"
                  src={`https://ui-avatars.com/api/?name=${user?.username}&length=1&background=random`}
                  alt={user?.username}
                />

                <div className="py-2 group-hover:opacity-100 group-hover:pointer-events-auto opacity-0 pointer-events-none absolute whitespace-nowrap right-0 ">
                  <button
                    onClick={handleLogout}
                    className=" bg-red-100 text-red-800 px-3 py-1 rounded-md text-xs"
                  >
                    Log out
                  </button>
                </div>
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
