import { DataTypes } from "sequelize";
import { newSeq } from "../../connection.js";

const Book = newSeq.define("books", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	genre_id: {
		type: DataTypes.INTEGER,
		references: {
			model: "genres",
			key: "id",
		},
	},
	author_id: {
		type: DataTypes.INTEGER,
		references: {
			model: "author_works",
			key: "author_id",
		},
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	quantity: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});

newSeq
	.sync()
	.then(() => {
		console.log("books table has sync");
	})
	.catch((err) => {
		console.log(`sync error : `, err);
	});

export const addBook = async (titlePrm, genre_idPrm, author_idPrm, statusPrm, quantityPrm) => {
	const create = await Book.create({
		title: titlePrm,
		genre_id: genre_idPrm,
		author_id: author_idPrm,
		status: statusPrm,
		quantity: quantityPrm,
	});
	console.log("book id ", create.id, " inserted");
	return create;
};

export const getBookByID = async (idPrm) => {
	const res = await Book.findOne({
		where: {
			id: idPrm,
		},
	});
	return res;
};

export const allBooks = async () => {
	const response = await Book.findAll();
	return response;
};

export default Book;
