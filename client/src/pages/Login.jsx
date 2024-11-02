import React, { useState } from "react"
import Navbar from "../components/Navbar"
import useLogin from "../hooks/Login"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { login, error, loading } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(username, password)

    login(username, password)
  }

  return (
    <>
      <Navbar />

      <main className="w-full h-full">
        <div className="w-full h-full flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className={`w-full max-w-md border p-10 rounded-lg ${
              loading ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <h2 className="text-2xl font-semibold mb-5">Login</h2>

            <div className="mb-5">
              <label htmlFor="username" className="block mb-2">
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <button className="w-full bg-black text-white py-2 rounded-lg">
              Login
            </button>

            {error && <p className="text-red-500 mt-5">{error}</p>}
          </form>
        </div>
      </main>
    </>
  )
}

export default Login
