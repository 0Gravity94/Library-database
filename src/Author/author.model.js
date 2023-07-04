import { DataTypes } from "sequelize";
import { newSeq } from "../../connection.js";

const Author = newSeq.define("author", {
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
		allowNull: false,
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

export default Author;
