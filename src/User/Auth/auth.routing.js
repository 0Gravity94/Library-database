import { Router } from "express";
import { getAllAuths, getByID, insertAuth, loginAuth } from "./auth.controller.js";

const authRoute = Router();

authRoute.post("", insertAuth);
authRoute.post("/", loginAuth);
authRoute.get("/:id", getByID);
authRoute.get("", getAllAuths);

export default authRoute;
