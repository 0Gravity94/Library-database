import { Router } from "express";
import { getByID, newDetail } from "./detail.controller.js";

const detailRoute = Router();

detailRoute.post("", newDetail);
detailRoute.get(":/id", getByID);

export default detailRoute;
