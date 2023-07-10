import { Router } from "express";
import { deleteUserByID, getAllUsers, getByID, newUser, updateUserByID } from "./user.controller.js";

const userRoute = Router();

userRoute.post("", newUser);

userRoute.get("/:id", getByID);
// userRoute.get("/user/:username", getUserByUsername);
userRoute.get("", getAllUsers);

userRoute.delete("/:id", deleteUserByID);

userRoute.put("/:id", updateUserByID);

export default userRoute;
