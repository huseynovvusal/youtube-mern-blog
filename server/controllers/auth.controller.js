import asyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"

import { generateAccessToken } from "../helpers/token.helper.js"
import User from "../models/user.model.js"
import { HttpError } from "../helpers/error.helper.js"

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

export const login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body

  if (!username || !password) {
    next(new HttpError("Please provide username and password", 400))
  }

  const user = await User.findOne({ username }).select("+password")

  if (!user) {
    return next(new HttpError("Wrong email or password", 400))
  }

  const isCorrectPassword = await bcrypt.compare(password, user.password)

  if (!isCorrectPassword) {
    next(new HttpError("Wrong email or password", 400))
  }

  const access_token = generateAccessToken(user._id)

  res
    .status(200)
    .cookie("access_token", access_token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      expires: new Date(
        Date.now() + parseInt(process.env.JWT_COOKIE_EXPIRE || "0")
      ),
    })
    // @ts-ignore
    .json({ success: true, data: { ...user._doc, password: undefined } })
})

export const logout = asyncHandler(async (req, res, next) => {
  res
    .status(200)
    .clearCookie("access_token")
    .json({ success: true, message: "Logged out" })
})
