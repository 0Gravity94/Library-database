import { DataTypes } from "sequelize";
import { newSeq } from "../../connection.js";

const User = newSeq.define("users", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	// full_name: {
	// 	type: DataTypes.STRING,
	// 	allowNull: false,
	// },
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	role: {
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

export const addUser = async (usernamePrm, passwordPrm, rolePrm) => {
	const create = await User.create({
		username: usernamePrm,
		password: passwordPrm,
		role: rolePrm,
	});
	console.log("user id ", create.id, " added");
	return create;
};

export const allUsers = async () => {
	const response = await User.findAll();
	return response;
};

export const getUserByID = async (idPrm) => {
	const res = await User.findOne({
		where: {
			id: idPrm,
		},
	});
	return res;
};

export const getUserByUserName = async (unPrm) => {
	const res = await User.findOne({
		where: {
			username: unPrm,
		},
	});
	return res;
};

export const deleteUser = async (idPrm) => {
	const response = await User.destroy({
		where: {
			id: idPrm,
		},
	});
	return response;
};

export default User;
