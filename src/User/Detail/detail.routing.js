import { Router } from "express";
import { deleteDetailByID, getAllDetails, getByID, newDetail, updateUserDetailByID } from "./detail.controller.js";

const detailRoute = Router();

detailRoute.post("", newDetail);

detailRoute.get("/:id", getByID);
detailRoute.get("", getAllDetails);

detailRoute.delete("/:id", deleteDetailByID);

detailRoute.put("/:id", updateUserDetailByID);

export default detailRoute;
