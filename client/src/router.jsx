import React from "react"
import { createBrowserRouter } from "react-router-dom"

import Login from "./pages/Login"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Create from "./pages/Create"
import SingleBlog from "./pages/SingleBlog"
import CheckLoggedIn from "./protect/CheckLoggedIn"
import CheckNotLoggedIn from "./protect/CheckNotLoggedIn"
import MyBlogs from "./pages/MyBlogs"
import Edit from "./pages/Edit"

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
    path: "/my-blogs",
    element: (
      <CheckLoggedIn>
        <MyBlogs />
      </CheckLoggedIn>
    ),
  },
  {
    path: "/blogs/edit/:id",
    element: <Edit />,
  },
  {
    path: "/blogs/:id",
    element: <SingleBlog />,
  },
])

export default router
