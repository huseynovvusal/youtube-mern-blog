import express from "express"
import { login, logout, signup } from "../controllers/auth.controller.js"
import { authenticateToken } from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)

router.get("/logout", logout)

router.get("/check-auth", authenticateToken, (req, res, next) => {
  // @ts-ignore
  res.json({ success: true, data: req.user })
})

export default router
