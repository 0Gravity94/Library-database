import { DataTypes } from "sequelize";
import { newSeq } from "../../connection.js";

const Author = newSeq.define("authors", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	full_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	gender: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	works: {
		type: DataTypes.STRING,
	},
});

newSeq
	.sync()
	.then(() => {
		console.log("author table has sync");
	})
	.catch((err) => {
		console.log(`sync error : `, err);
	});

export const addAuthor = async (full_namePrm, genderPrm, worksPrm) => {
	const create = await Author.create({
		full_name: full_namePrm,
		gender: genderPrm,
		works: worksPrm,
	});
	console.log("author id ", create.id, " added");
	return create;
};

export const getAuthorByID = async (idPrm) => {
	const res = await Author.findOne({
		where: {
			id: idPrm,
		},
	});
	return res;
};

export const allAuthors = async () => {
	const response = await Author.findAll();
	return response;
};

export default Author;
