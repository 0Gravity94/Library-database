import { Router } from "express";
import { tokenVerify } from "../../Middleware/auth.middleware.js";
import { deleteAuthByID, getAllAuths, getByID, insertAuth, loginAuth, updateAuthByID } from "./auth.controller.js";

const authRoute = Router();

authRoute.post("", loginAuth);

authRoute.post("", insertAuth);

authRoute.get("/:id", tokenVerify, getByID);
authRoute.get("", getAllAuths);

authRoute.delete("/:id", deleteAuthByID);

authRoute.put("/:id", updateAuthByID);

export default authRoute;
