import { DataTypes } from "sequelize";
import { newSeq } from "../../connection.js";

const User = newSeq.define("users", {
	full_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

newSeq
	.sync()
	.then(() => {
		console.log("users table has sync");
	})
	.catch((err) => {
		console.log(`sync error : `, err);
	});

export default User;
