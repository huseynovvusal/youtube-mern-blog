import express from "express"
import {
  create,
  deleteBlogById,
  getAllBlogs,
  getBlogById,
  getMyBlogs,
  update,
} from "../controllers/blog.controller.js"
import {
  checkBlogOwnership,
  uploadBlogImage,
} from "../middlewares/blog.middleware.js"
import { authenticateToken } from "../middlewares/auth.middleware.js"

const router = express.Router()

// CREATE
router.post(
  "/create",
  authenticateToken,
  uploadBlogImage.single("image"),
  create
)

// GET ALL BLOGS
router.get("/", getAllBlogs)

// MY BLOGS
router.get("/my-blogs", authenticateToken, getMyBlogs)

// GET BLOG BY ID
router.get("/:id", getBlogById)

// UPDATE
router.put(
  "/:id/update",
  authenticateToken,
  checkBlogOwnership,
  uploadBlogImage.single("image"),
  update
)

// DELETE
router.delete(
  "/:id/delete",
  authenticateToken,
  checkBlogOwnership,
  deleteBlogById
)

export default router
