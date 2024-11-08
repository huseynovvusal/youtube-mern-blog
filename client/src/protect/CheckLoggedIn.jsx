import React from "react"
import { Navigate } from "react-router-dom"

import useAuth from "../store/auth"

function CheckLoggedIn({ children }) {
  const { user } = useAuth((state) => state)

  if (!user) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}

export default CheckLoggedIn
