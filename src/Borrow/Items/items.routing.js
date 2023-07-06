import { Router } from "express";
import { borrowItem, getAllBorrowItems, getByID } from "./items.controller.js";

const borrowItemRoute = Router();

borrowItemRoute.post("", borrowItem);
borrowItemRoute.get("/:id", getByID);
borrowItemRoute.get("", getAllBorrowItems);

export default borrowItemRoute;
