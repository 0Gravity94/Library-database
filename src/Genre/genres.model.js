import { DataTypes } from "sequelize";
import { newSeq } from "../../connection.js";

const Genre = newSeq.define("genres", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	genre_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

newSeq
	.sync()
	.then(() => {
		console.log("genres table has sync");
	})
	.catch((err) => {
		console.log(`sync error : `, err);
	});

export const addGenre = async (genre_namePrm) => {
	const create = await Genre.create({
		genre_name: genre_namePrm,
	});
	console.log("genre id ", create.id, " added");
	return create;
};

export const getGenreByID = async (id) => {
	const res = await Genre.findOne({
		where: {
			id: id,
		},
	});
	return res;
};

export const allGenres = async () => {
	const response = await Genre.findAll();
	return response;
};

export default Genre;
