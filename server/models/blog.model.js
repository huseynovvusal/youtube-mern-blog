import mongoose, { Schema } from "mongoose"

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [10, "Title must be at least 10 characters"],
      maxlength: [200, "Title must be at most 200 characters"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      maxlength: [10000, "Content must be at most 10000 characters"],
    },
    imageUrl: {
      type: String,
      required: [true, "Image is required"],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Blog = mongoose.model("blog", BlogSchema)

export default Blog
