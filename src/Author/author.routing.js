import { Router } from "express";
import { deleteAuthorByID, getAllAuthors, getByID, newAuthor } from "./author.controller.js";

const authorRoute = Router();

authorRoute.post("", newAuthor);
authorRoute.get("/:id", getByID);
authorRoute.get("", getAllAuthors);
authorRoute.delete("/:id", deleteAuthorByID);

export default authorRoute;
