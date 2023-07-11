import { Router } from "express";
import { tokenVerify } from "../Middleware/auth.middleware.js";
import { deleteBookByID, getAllBooks, getByID, insertData, updateBookByID } from "./book.controller.js";

const route = Router();

route.post("", tokenVerify, insertData);

route.get("/:id", tokenVerify, getByID);
route.get("", tokenVerify, getAllBooks);

route.delete("/:id", tokenVerify, deleteBookByID);

route.put("/:id", tokenVerify, updateBookByID);

export default route;
