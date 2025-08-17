import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /\S+@\S+\.\S+/.test(v);
        },
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      trim: true,
    },
    phoneNumber: {
      type: String,
      unique:true,
      sparse:true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: "Invalid phone number",
      },
    },
    address: {
      type: String,
      trim: true
    },
    gender: {
         type: String,
    enum: ["Male", "Female", "Other"]
    },
    birthday: {
      type: Date,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
