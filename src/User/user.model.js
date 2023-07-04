import { DataTypes } from "sequelize";
import { newSeq } from "../../connection.js";

const User = newSeq.define("users", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
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

export const addUser = async (full_namePrm) => {
	const create = await User.create({
		full_name: full_namePrm,
	});
	console.log("user id ", create.id, " added");
	return create;
};

export const getUserByID = async (id) => {
	const res = await User.findOne({
		where: {
			id: id,
		},
	});
	return res;
};

export default User;
