import { Router } from "express";
import { tokenVerify } from "../Middleware/auth.middleware.js";
import { deleteBorrowByID, getAllBorrows, getByID, insertBorrow, updateBorrowByID } from "./borrows.controller.js";

const borrowRoute = Router();

borrowRoute.post("", tokenVerify, insertBorrow);

borrowRoute.get("/:id", tokenVerify, getByID);
borrowRoute.get("", tokenVerify, getAllBorrows);

borrowRoute.delete("/:id", tokenVerify, deleteBorrowByID);

borrowRoute.put("/:id", tokenVerify, updateBorrowByID);

export default borrowRoute;
