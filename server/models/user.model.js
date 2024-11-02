import mongoose, { Schema } from "mongoose"
import bcrypt from "bcryptjs"

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [3, "Username must be at least 3 characters"],
    maxlenght: [20, "Username must be at most 20 characters"],
    mathch: [
      /^[a-zA-Z0-9]+$/,
      "Username must contain only letters and numbers",
    ],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please enter a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
    maxlength: [100, "Password must be at most 100 characters"],
    select: false,
  },
})

// Hooks
UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next()

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err)

      this.password = hash

      next()
    })
  })
})

const User = mongoose.model("user", UserSchema)

export default User
