import { Router } from "express";
import { getByID, newAuthor } from "./author.controller.js";

const authorRoute = Router();

authorRoute.post("", newAuthor);
authorRoute.get(":id", getByID);

export default authorRoute;
