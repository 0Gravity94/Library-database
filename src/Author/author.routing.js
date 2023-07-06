import { Router } from "express";
import { getAllAuthors, getByID, newAuthor } from "./author.controller.js";

const authorRoute = Router();

authorRoute.post("", newAuthor);
authorRoute.get("/:id", getByID);
authorRoute.get("", getAllAuthors);

export default authorRoute;
