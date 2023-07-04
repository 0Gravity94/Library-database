import { Router } from "express";
import { getByID, insertData } from "./book.controller.js";

const route = Router();

route.post("", insertData);
route.get(":/id", getByID);

export default route;
