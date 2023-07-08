import { Router } from "express";
import { deleteDetailByID, getAllDetails, getByID, newDetail } from "./detail.controller.js";

const detailRoute = Router();

detailRoute.post("", newDetail);
detailRoute.get("/:id", getByID);
detailRoute.get("", getAllDetails);
detailRoute.delete("/:id", deleteDetailByID);

export default detailRoute;
