import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

import apiRouter from "./routers/index.js"
import { connectDB } from "./helpers/db.helper.js"
import { errorHandler } from "./middlewares/error.middleware.js"

// !!!!!!
import path from "path"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(express.json())
app.use(cookieParser())

// !!!!!!!
// Static Files
app.use(express.static(path.join(import.meta.dirname, "../client/dist")))

// Router
app.use("/api", apiRouter)

// !!
// React
app.get("*", (req, res) => {
  res.sendFile(path.join(import.meta.dirname, "../../client/dist/index.html"))
})

// Error Handler
app.use(errorHandler)

// Connect to MongoDB
connectDB()

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`)
})
