import { DataTypes } from "sequelize";
import { newSeq } from "../../connection.js";

const Borrow = newSeq.define("borrows", {
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
});

newSeq
	.sync()
	.then(() => {
		console.log("borrows table has sync");
	})
	.catch((err) => {
		console.log(`sync error : `, err);
	});

export const addBorrow = async (user_idPrm) => {
	const create = await Borrow.create({
		user_id: user_idPrm,
	});
	console.log("Borrow id ", create.id, " added");
	return create;
};

export const getBorrowByID = async (id) => {
	const res = await Borrow.findOne({
		where: {
			id: id,
		},
	});
	return res;
};

export default Borrow;
