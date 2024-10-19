import express from "express"

import authRouter from "./auth.router.js"

const router = express.Router()

router.use("/auth", authRouter)

router.post("/", (req, res) => {
  console.log(req.cookies)
  res.send(req.cookies)
})

export default router
