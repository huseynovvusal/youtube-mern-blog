import asyncHandler from "express-async-handler"

import { generateAccessToken } from "../helpers/token.helper.js"
import User from "../models/user.model.js"

export const signup = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body

  const user = await User.create({
    username,
    email,
    password,
  })

  const access_token = generateAccessToken(user._id)

  res
    .cookie("access_token", access_token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      expires: new Date(
        Date.now() + parseInt(process.env.JWT_COOKIE_EXPIRE || "0")
      ),
    })
    .status(201)
    // @ts-ignore
    .json({ success: true, data: { ...user._doc, password: undefined } })
})
