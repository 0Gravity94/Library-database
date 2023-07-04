import express from "express";
import { newSeq } from "./connection.js";

import Book from "./src/Book/books.model.js";
import Author from "./src/Author/author.model.js";
import User from "./src/User/user.model.js";
import Detail from "./src/User/Detail/detail.model.js";
import Auth from "./src/User/Auth/auth.model.js";
import Genre from "./src/Genre/genres.model.js";
import Borrow from "./src/Borrow/borrows.model.js";
import Borrow_item from "./src/Borrow/Items/items.model.js";
import route from "./src/Book/book.routing.js";
import authorRoute from "./src/Author/author.routing.js";
import userRoute from "./src/User/user.routing.js";

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

app.listen(port, () => {
	console.log(`apps is running on port ${port}`);
});
