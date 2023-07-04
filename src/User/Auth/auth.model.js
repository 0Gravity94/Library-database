import { DataTypes } from "sequelize";
import { newSeq } from "../../../connection.js";

const Auth = newSeq.define("auth", {
	user_id: {
		type: DataTypes.INTEGER,
		references: {
			model: "users",
			key: "id",
		},
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

newSeq
	.sync()
	.then(() => {
		console.log("authentication table has sync");
	})
	.catch((err) => {
		console.log(`sync error : `, err);
	});

export default Auth;
