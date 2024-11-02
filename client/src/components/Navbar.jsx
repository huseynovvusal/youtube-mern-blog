import React from "react"

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full">
      <nav className="flex justify-between lg:max-w-4xl md:max-w-2xl sm:max-w-xl  mx-auto py-6 px-2">
        <h1 className="text-lg font-semibold">MERN Blog</h1>
        <ul className="flex flex-row gap-8 text-base">
          <li className="hover:text-gray-600">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-gray-600">
            <a href="/login">Login</a>
          </li>
          <li className="hover:text-gray-600">
            <a href="/signup">Signup</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
