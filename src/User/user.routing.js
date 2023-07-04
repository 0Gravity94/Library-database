import { Router } from "express";
import { getByID, newUser } from "./user.controller.js";

const userRoute = Router();

userRoute.post("", newUser);
userRoute.get(":/id", getByID);

export default userRoute;
