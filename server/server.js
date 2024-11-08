import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

import apiRouter from "./routers/index.js"
import { connectDB } from "./helpers/db.helper.js"
import { errorHandler } from "./middlewares/error.middleware.js"
import e from "express"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(express.json())
app.use(cookieParser())

// Router
app.use("/api", apiRouter)

// Error Handler
app.use(errorHandler)

// Connect to MongoDB
connectDB()

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`)
})
