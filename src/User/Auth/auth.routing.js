import { Router } from "express";
import { loginAuth } from "./auth.controller.js";

const authRoute = Router();

authRoute.post("", loginAuth);

export default authRoute;
