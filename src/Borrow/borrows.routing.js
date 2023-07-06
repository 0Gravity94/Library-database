import { Router } from "express";
import { getAllBorrows, getByID, insertBorrow } from "./borrows.controller.js";

const borrowRoute = Router();

borrowRoute.post("", insertBorrow);
borrowRoute.get("/:id", getByID);
borrowRoute.get("", getAllBorrows);

export default borrowRoute;
