import { Router } from "express";
import { getAllUsers, getByID, newUser } from "./user.controller.js";

const userRoute = Router();

userRoute.post("", newUser);
userRoute.get("/:id", getByID);
userRoute.get("", getAllUsers);

export default userRoute;
