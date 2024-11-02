import jwt from "jsonwebtoken"
import { HttpError } from "../helpers/error.helper.js"

export const authenticateToken = (req, res, next) => {
  const token = req.cookies.access_token

  if (!token) {
    return next(new HttpError("Unauthorized", 401))
  }

  const JWT_SECRET = process.env.JWT_SECRET

  if (!JWT_SECRET) return

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(new HttpError("Unauthorized", 401))
    }

    req.user = {
      id: decoded.id,
    }
  })

  next()
}
