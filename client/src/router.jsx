import React from "react"
import { createBrowserRouter } from "react-router-dom"

import Login from "./pages/Login"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Create from "./pages/Create"
import SingleBlog from "./pages/SingleBlog"
import CheckLoggedIn from "./protect/CheckLoggedIn"
import CheckNotLoggedIn from "./protect/CheckNotLoggedIn"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: (
      <CheckNotLoggedIn>
        <Login />
      </CheckNotLoggedIn>
    ),
  },
  {
    path: "/signup",
    element: (
      <CheckNotLoggedIn>
        <Signup />
      </CheckNotLoggedIn>
    ),
  },
  {
    path: "/create",
    element: (
      <CheckLoggedIn>
        <Create />
      </CheckLoggedIn>
    ),
  },
  {
    path: "/blogs/:id",
    element: <SingleBlog />,
  },
])

export default router
