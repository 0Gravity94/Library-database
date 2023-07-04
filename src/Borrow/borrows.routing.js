import { Router } from "express";
import { getByID, insertBorrow } from "./borrows.controller.js";

const borrowRoute = Router();

borrowRoute.post("", insertBorrow);
borrowRoute.get(":/id", getByID);

export default borrowRoute;
