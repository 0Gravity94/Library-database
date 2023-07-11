import { Router } from "express";
import { tokenVerify } from "../../Middleware/auth.middleware.js";
import { borrowItem, deleteBorrowItemByID, getAllBorrowItems, getByID, updateBorrowItemByID } from "./items.controller.js";

const borrowItemRoute = Router();

borrowItemRoute.post("", tokenVerify, borrowItem);

borrowItemRoute.get("/:id", tokenVerify, getByID);
borrowItemRoute.get("", tokenVerify, getAllBorrowItems);

borrowItemRoute.delete("/:id", tokenVerify, deleteBorrowItemByID);

borrowItemRoute.put("/:id", tokenVerify, updateBorrowItemByID);

export default borrowItemRoute;
