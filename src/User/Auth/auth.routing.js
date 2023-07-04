import { Router } from "express";
import { getByID, insertAuth } from "./auth.controller.js";

const authRoute = Router();

authRoute.post("", insertAuth);
authRoute.get(":/id", getByID);

export default authRoute;
