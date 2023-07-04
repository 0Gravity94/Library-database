import { DataTypes } from "sequelize";
import { newSeq } from "../../connection.js";

const Genre = newSeq.define("genres", {
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

export default Genre;
