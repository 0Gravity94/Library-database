import { Router } from "express";
import { tokenVerify } from "../Middleware/auth.middleware.js";
import { deleteAuthorByID, getAllAuthors, getByID, newAuthor, updateAuthorByID } from "./author.controller.js";

const authorRoute = Router();

authorRoute.post("", tokenVerify, newAuthor);

authorRoute.get("/:id", tokenVerify, getByID);
authorRoute.get("", tokenVerify, getAllAuthors);

authorRoute.delete("/:id", tokenVerify, deleteAuthorByID);

authorRoute.put("/:id", tokenVerify, updateAuthorByID);

export default authorRoute;
