import { DataTypes } from "sequelize";
import { newSeq } from "../../connection.js";

const Borrow = newSeq.define("borrows", {
	user_id: {
		type: DataTypes.INTEGER,
		references: {
			model: "users",
			key: "id",
		},
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

newSeq
	.sync()
	.then(() => {
		console.log("borrows table has sync");
	})
	.catch((err) => {
		console.log(`sync error : `, err);
	});

export default Borrow;
