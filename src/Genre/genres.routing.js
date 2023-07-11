import { Router } from "express";
import { tokenVerify } from "../Middleware/auth.middleware.js";
import { deleteGenreByID, getAllGenres, getByID, newGenre, updateGenreByID } from "./genres.controller.js";

const genreRoute = Router();

genreRoute.post("", tokenVerify, newGenre);

genreRoute.get("/:id", tokenVerify, getByID);
genreRoute.get("", tokenVerify, getAllGenres);

genreRoute.delete("/:id", tokenVerify, deleteGenreByID);

genreRoute.put("/:id", tokenVerify, updateGenreByID);

export default genreRoute;
