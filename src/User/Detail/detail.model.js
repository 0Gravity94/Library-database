import { DataTypes } from "sequelize";
import { newSeq } from "../../../connection.js";

const Detail = newSeq.define("users_detail", {
	user_id: {
		type: DataTypes.INTEGER,
		references: {
			model: "users",
			key: "id",
		},
	},
	phone: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	city: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	date_of_birth: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	joined_at: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	gender: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

newSeq
	.sync()
	.then(() => {
		console.log("users_detail table has sync");
	})
	.catch((err) => {
		console.log(`sync error : `, err);
	});

export default Detail;
