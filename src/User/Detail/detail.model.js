import { DataTypes } from "sequelize";
import { newSeq } from "../../../connection.js";

const Detail = newSeq.define("users_details", {
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
	full_name: {
		type: DataTypes.STRING,
		allowNull: false,
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

export const addDetail = async (user_idPrm, full_namePrm, phonePrm, cityPrm, dobPrm, genderPrm) => {
	const create = await Detail.create({
		user_id: user_idPrm,
		full_name: full_namePrm,
		phone: phonePrm,
		city: cityPrm,
		date_of_birth: dobPrm,
		gender: genderPrm,
	});
	console.log("detail id ", create.id, " added");
	return create;
};

export const allDetails = async () => {
	const response = await Detail.findAll();
	return response;
};

export const getDetailByID = async (user_idPrm) => {
	const res = await Detail.findOne({
		where: {
			user_id: user_idPrm,
		},
	});
	return res;
};

export const deleteUserDetail = async (user_idPrm) => {
	const response = await Detail.destroy({
		where: {
			user_id: user_idPrm,
		},
	});
	return response;
};

export default Detail;
