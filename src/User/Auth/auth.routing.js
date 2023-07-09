import { Router } from "express";
import { deleteAuthByID, getAllAuths, getByID, insertAuth, loginAuth, updateAuthByID } from "./auth.controller.js";

const authRoute = Router();

authRoute.post("", insertAuth);
authRoute.post("/", loginAuth);
authRoute.get("/:id", getByID);
authRoute.get("", getAllAuths);
authRoute.delete("/:id", deleteAuthByID);
authRoute.put("/:id", updateAuthByID);

export default authRoute;
