import { Router } from "express";
import { getByID, newGenre } from "./genres.controller.js";

const genreRoute = Router();

genreRoute.post("", newGenre);
genreRoute.get(":/id", getByID);

export default genreRoute;
