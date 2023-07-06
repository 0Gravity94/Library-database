import { Router } from "express";
import { getAllDetails, getByID, newDetail } from "./detail.controller.js";

const detailRoute = Router();

detailRoute.post("", newDetail);
detailRoute.get("/:id", getByID);
detailRoute.get("", getAllDetails);

export default detailRoute;
