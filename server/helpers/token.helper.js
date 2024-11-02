import jwt from "jsonwebtoken"

export const generateAccessToken = (id) => {
  const JWT_SCRET = process.env.JWT_SECRET
  const JWT_EXPIRE = process.env.JWT_EXPIRE

  if (!JWT_SCRET || !JWT_EXPIRE) {
    throw new Error("JWT_SECRET and JWT_EXPIRE must be provided")
  }

  return jwt.sign({ id }, JWT_SCRET, {
    expiresIn: JWT_EXPIRE,
  })
}
