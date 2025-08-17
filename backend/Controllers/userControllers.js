import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const createAccount=async (req,res) => {
   
    const { fullName, email, password } = req.body;
    if (!fullName) {
      return res
        .status(400)
        .json({ success: false, message: "Full Name is required!" });
    }
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required!" });
    }
    if (!password) {
      return res
        .status(400)
        .json({ success: false, message: "Password is required!" });
    }
     try {
    const checkExistingUser = await User.findOne({ email });
    if (checkExistingUser)
      return res
        .status(400)
        .json({ success: false, message: "Account already exist!" });
    

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    const { password: _, ...userData } = newUser._doc;
    return res
      .status(201)
      .json({ success: true, message: "Account created successfully!" ,user: userData});
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to create account. Please try again later.",
      error: error.message,
    });
  }
}


const loginUser=async (req,res) => {
    const { email, password } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required!" });
  }
 
    if (!password) {
      return res
        .status(400)
        .json({ success: false, message: "Password is required!" });
    }
 try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User doesn't exist!" });
    } else {
      const isPasswordValid = await bcrypt.compare(password,user.password);
      if (!isPasswordValid) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid credentials!" });
      } else {
        if(!process.env.JWT_SECRET){
            throw new Error("JWT_SECRET is not defined in environment variables");
        }
        const token = jwt.sign(
          { id: user._id, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );

        const { password: _, ...userData } = user._doc;

        return res.status(200).json({
          success: true,
          message: "Login successful!",
        token,
          user:userData
        });
      }
    }
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Unable to login. Please try again later.",
        error: error.message,
      });
  }
}

export {loginUser,createAccount}