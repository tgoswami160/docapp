import express from "express";
import { createAccount, loginUser } from "../Controllers/userControllers.js";



const userRouter = express.Router();

userRouter.post("/create-account", createAccount)
userRouter.post("/login",loginUser);


export default userRouter;