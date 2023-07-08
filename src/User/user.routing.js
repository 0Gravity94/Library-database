import { Router } from "express";
import { deleteUserByID, getAllUsers, getByID, newUser } from "./user.controller.js";

const userRoute = Router();

userRoute.post("", newUser);
userRoute.get("/:id", getByID);
userRoute.get("", getAllUsers);
userRoute.delete("/:id", deleteUserByID);

export default userRoute;
