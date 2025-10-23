import express from "express";
import { authMiddleWare } from "../middleware/auth.js";
import {
  carInfoUplaod,
  changeRoleToOwner,
} from "../controller/ownerController.js";
import upload from "../middleware/multer.js";

const ownerRouter = express.Router();

ownerRouter.post("/change-role", authMiddleWare, changeRoleToOwner);
ownerRouter.post(
  "/add-car",
  upload.single("image"),
  authMiddleWare,
  carInfoUplaod
);

export default ownerRouter;
