import express from "express";
import { newSeq } from "./connection.js";

import Book from "./src/Book/books.model.js";
import Author from "./src/Author/author.model.js";
import User from "./src/User/user.model.js";
import Detail from "./src/User/Detail/detail.model.js";
import Genre from "./src/Genre/genres.model.js";
import Borrow from "./src/Borrow/borrows.model.js";
import Borrow_item from "./src/Borrow/Items/items.model.js";
import route from "./src/Book/book.routing.js";
import authorRoute from "./src/Author/author.routing.js";
import userRoute from "./src/User/user.routing.js";
import genreRoute from "./src/Genre/genres.routing.js";
import detailRoute from "./src/User/Detail/detail.routing.js";
import authRoute from "./src/User/Auth/auth.routing.js";
import borrowRoute from "./src/Borrow/borrows.routing.js";
import borrowItemRoute from "./src/Borrow/Items/items.routing.js";

const port = 3300;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("hello world");
});

app.use("/books", route);
app.use("/authors", authorRoute);
app.use("/users", userRoute);
app.use("/genres", genreRoute);
app.use("/users_details", detailRoute);
app.use("/borrows", borrowRoute);
app.use("/borrow_items", borrowItemRoute);
app.use("/login", authRoute);

app.listen(port, () => {
	console.log(`apps is running on port ${port}`);
});
