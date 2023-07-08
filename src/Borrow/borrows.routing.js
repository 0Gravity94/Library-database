import { Router } from "express";
import { deleteBorrowByID, getAllBorrows, getByID, insertBorrow } from "./borrows.controller.js";

const borrowRoute = Router();

borrowRoute.post("", insertBorrow);
borrowRoute.get("/:id", getByID);
borrowRoute.get("", getAllBorrows);
borrowRoute.delete("/:id", deleteBorrowByID);

export default borrowRoute;
