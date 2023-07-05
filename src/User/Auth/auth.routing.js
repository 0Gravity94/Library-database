import { Router } from "express";
import { getByID, insertAuth, loginAuth } from "./auth.controller.js";

const authRoute = Router();

authRoute.post("", insertAuth);
authRoute.post("/", loginAuth);
authRoute.get(":/id", getByID);

export default authRoute;
