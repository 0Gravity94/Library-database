import { Router } from "express";
import { deleteGenreByID, getAllGenres, getByID, newGenre } from "./genres.controller.js";

const genreRoute = Router();

genreRoute.post("", newGenre);
genreRoute.get("/:id", getByID);
genreRoute.get("", getAllGenres);
genreRoute.delete("/:id", deleteGenreByID);

export default genreRoute;
