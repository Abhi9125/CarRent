import express from "express";
import { authMiddleWare } from "../middleware/auth.js";
import { changeRoleToOwner } from "../controller/ownerController.js";

const ownerRouter = express.Router();

ownerRouter.post("/change-role", authMiddleWare, changeRoleToOwner);

export default ownerRouter;
