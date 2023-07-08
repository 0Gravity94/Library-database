import { Router } from "express";
import { borrowItem, deleteBorrowItemByID, getAllBorrowItems, getByID } from "./items.controller.js";

const borrowItemRoute = Router();

borrowItemRoute.post("", borrowItem);
borrowItemRoute.get("/:id", getByID);
borrowItemRoute.get("", getAllBorrowItems);
borrowItemRoute.delete("/:id", deleteBorrowItemByID);

export default borrowItemRoute;
