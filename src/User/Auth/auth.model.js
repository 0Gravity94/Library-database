import { DataTypes } from "sequelize";
import { newSeq } from "../../../connection.js";

const Auth = newSeq.define("auths", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
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
	role: {
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

export const addAuthentication = async (user_idPrm, passwordPrm, rolePrm) => {
	const create = await Auth.create({
		user_id: user_idPrm,
		password: passwordPrm,
		role: rolePrm,
	});
	console.log("auth id ", create.id, " added");
	return create;
};

export const allAuths = async () => {
	const response = await Auth.findAll();
	return response;
};

export const getAuthByID = async (idPrm) => {
	const res = await Auth.findOne({
		where: {
			id: idPrm,
		},
	});
	return res;
};

export const deleteAuth = async (idPrm) => {
	const response = await Auth.destroy({
		where: {
			id: idPrm,
		},
	});
	return response;
};

export default Auth;
