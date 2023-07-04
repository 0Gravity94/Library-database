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
});

newSeq
	.sync()
	.then(() => {
		console.log("authentication table has sync");
	})
	.catch((err) => {
		console.log(`sync error : `, err);
	});

export const addAuthentication = async (user_idPrm, passwordPrm) => {
	const create = await Auth.create({
		user_id: user_idPrm,
		password: passwordPrm,
	});
	console.log("auth id ", create.id, " added");
	return create;
};

export const getAuthByID = async (id) => {
	const res = await Auth.findOne({
		where: {
			id: id,
		},
	});
	return res;
};

export default Auth;
