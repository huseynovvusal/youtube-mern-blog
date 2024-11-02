import asyncHandler from "express-async-handler"
import { HttpError } from "../helpers/error.helper.js"
import Blog from "../models/blog.model.js"

export const create = asyncHandler(async (req, res, next) => {
  const { title, content } = req.body

  if (!req.file) {
    return next(new HttpError("Please upload an image", 400))
  }

  // @ts-ignore
  const author = req.user.id

  const blog = await Blog.create({
    title,
    content,
    imageUrl: req.file.path,
    author,
  })

  res.status(201).json({
    success: true,
    data: blog,
  })
})

export const update = asyncHandler(async (req, res, next) => {
  const { title, content } = req.body

  const { id } = req.params

  const newBlogData = {}

  if (title) newBlogData.title = title
  if (content) newBlogData.content = content
  if (req.file) newBlogData.imageUrl = req.file.path

  const blog = await Blog.findByIdAndUpdate(id, newBlogData, {
    new: true,
    runValidators: true,
  })

  res.status(201).json({
    success: true,
    data: blog,
  })
})

export const deleteBlogById = asyncHandler(async (req, res, next) => {
  const { id } = req.params

  const blog = await Blog.findByIdAndDelete(id)

  if (!blog) {
    return next(new HttpError("Blog not found", 404))
  }

  res.status(200).json({
    success: true,
  })
})

export const getAllBlogs = asyncHandler(async (req, res, next) => {
  const blogs = await Blog.find().populate("author", "username")

  res.status(200).json({
    success: true,
    data: blogs,
  })
})

export const getBlogById = asyncHandler(async (req, res, next) => {
  const { id } = req.params

  const blog = await Blog.findById(id)

  res.status(200).json({
    success: true,
    data: blog,
  })
})

export const getMyBlogs = asyncHandler(async (req, res, next) => {
  // @ts-ignore
  const { id } = req.user

  const blog = await Blog.find({ author: id })

  res.status(200).json({
    success: true,
    data: blog,
  })
})