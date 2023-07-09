import { Router } from "express";
import { deleteBookByID, getAllBooks, getByID, insertData, updateBookByID } from "./book.controller.js";

const route = Router();

route.post("", insertData);
route.get("/:id", getByID);
route.get("", getAllBooks);
route.delete("/:id", deleteBookByID);
route.put("/:id", updateBookByID);

export default route;
