import { Router } from "express";
import { tokenVerify } from "../Middleware/auth.middleware.js";
import { deleteUserByID, getAllUsers, getByID, newUser, updateUserByID } from "./user.controller.js";

const userRoute = Router();

userRoute.post("", tokenVerify, newUser);

userRoute.get("/:id", tokenVerify, getByID);
userRoute.get("", tokenVerify, getAllUsers);

userRoute.delete("/:id", tokenVerify, deleteUserByID);

userRoute.put("/:id", tokenVerify, updateUserByID);

export default userRoute;
