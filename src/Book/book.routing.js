import { Router } from "express";
import { getAllBooks, getByID, insertData } from "./book.controller.js";

const route = Router();

route.post("", insertData);
route.get("/:id", getByID);
route.get("", getAllBooks);

export default route;
