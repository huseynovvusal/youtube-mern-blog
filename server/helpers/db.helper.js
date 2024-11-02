import mongoose from "mongoose"

export const connectDB = () => {
  const MONGO_URI = process.env.MONGO_URI

  if (!MONGO_URI) {
    throw new Error("Mongo URI is missing")
  }

  mongoose
    .connect(MONGO_URI, {
      dbName: "mern-blog",
    })
    .then((conn) => {
      console.log(`MongoDB connected: ${conn.connection.host}`)
    })
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}
