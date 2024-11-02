import express from "express"

import authRouter from "./auth.router.js"
import blogsRouter from "./blogs.router.js"

const router = express.Router()

router.use("/auth", authRouter)
router.use("/blogs", blogsRouter)

export default router
