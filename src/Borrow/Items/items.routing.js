import { Router } from "express";
import { borrowItem, deleteBorrowItemByID, getAllBorrowItems, getByID, updateBorrowItemByID } from "./items.controller.js";

const borrowItemRoute = Router();

borrowItemRoute.post("", borrowItem);
borrowItemRoute.get("/:id", getByID);
borrowItemRoute.get("", getAllBorrowItems);
borrowItemRoute.delete("/:id", deleteBorrowItemByID);
borrowItemRoute.put("/:id", updateBorrowItemByID);

export default borrowItemRoute;
