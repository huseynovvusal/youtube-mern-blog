import React from "react"
import { Navigate } from "react-router-dom"

import useAuth from "../store/auth"

function CheckNotLoggedIn({ children }) {
  const { user } = useAuth((state) => state)

  if (user) {
    return <Navigate to="/" />
  }

  return <>{children}</>
}

export default CheckNotLoggedIn