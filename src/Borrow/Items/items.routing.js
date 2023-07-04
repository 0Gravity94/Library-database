import { Router } from "express";
import { borrowItem, getByID } from "./items.controller.js";

const borrowItemRoute = Router();

borrowItemRoute.post("", borrowItem);
borrowItemRoute.get(":/id", getByID);

export default borrowItemRoute;
