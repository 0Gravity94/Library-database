import { Router } from "express";
import { deleteGenreByID, getAllGenres, getByID, newGenre, updateGenreByID } from "./genres.controller.js";

const genreRoute = Router();

genreRoute.post("", newGenre);
genreRoute.get("/:id", getByID);
genreRoute.get("", getAllGenres);
genreRoute.delete("/:id", deleteGenreByID);
genreRoute.put("/:id", updateGenreByID);

export default genreRoute;
