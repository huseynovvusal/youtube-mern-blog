import { HttpError } from "../helpers/error.helper.js"

export const errorHandler = (err, req, res, next) => {
  let httpError = err

  // !
  // console.log(err)

  if (err.name === "ValidationError") {
    httpError = new HttpError(
      Object.values(err.errors).map((val) => val.message),
      400
    )
  } else if (err.code === 11000) {
    if (err.keyValue.email) {
      httpError = new HttpError("Email already exists", 400)
    } else if (err.keyValue.username) {
      httpError = new HttpError("Username already exists", 400)
    }
  }

  res
    .status(httpError.status || 500)
    .json({ success: false, error: httpError.message })
}
