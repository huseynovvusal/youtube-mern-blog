import { v2 as cloudinary } from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"
import multer from "multer"
import dotenv from "dotenv"

import Blog from "../models/blog.model.js"
import { HttpError } from "../helpers/error.helper.js"

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    const publicId = `${file.fieldname}-${Date.now()}`
    const format = file.originalname.split(".").pop()

    return {
      folder: "blog-images",
      public_id: publicId,
      format,
    }
  },
})

export const uploadBlogImage = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg") {
      cb(null, true)
    } else {
      cb(new Error("Only JPEG or JPG images are allowed"))
    }
  },
})

export const checkBlogOwnership = async (req, res, next) => {
  const { id } = req.params
  const author = req.user.id

  const blog = await Blog.findOne({ _id: id, author })

  if (!blog) {
    return next(
      new HttpError("You are not allowed to perform this action", 403)
    )
  }

  next()
}
