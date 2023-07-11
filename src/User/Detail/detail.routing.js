import { Router } from "express";
import { tokenVerify } from "../../Middleware/auth.middleware.js";
import { deleteDetailByID, getAllDetails, getByID, newDetail, updateUserDetailByID } from "./detail.controller.js";

const detailRoute = Router();

detailRoute.post("", tokenVerify, newDetail);

detailRoute.get("/:id", tokenVerify, getByID);
detailRoute.get("", tokenVerify, getAllDetails);

detailRoute.delete("/:id", tokenVerify, deleteDetailByID);

detailRoute.put("/:id", tokenVerify, updateUserDetailByID);

export default detailRoute;
