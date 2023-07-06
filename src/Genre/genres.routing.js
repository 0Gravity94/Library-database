import { Router } from "express";
import { getAllGenres, getByID, newGenre } from "./genres.controller.js";

const genreRoute = Router();

genreRoute.post("", newGenre);
genreRoute.get("/genres/:id", getByID);
genreRoute.get("", getAllGenres);

export default genreRoute;
