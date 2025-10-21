import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
} from "../controller/UserController.js";
import { authMiddleWare } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/getUser", authMiddleWare, getUser);

export default userRouter;
