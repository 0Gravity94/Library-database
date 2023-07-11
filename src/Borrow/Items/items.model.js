import Sequelize, { DataTypes } from "sequelize";
import { newSeq } from "../../../connection.js";

const Borrow_item = newSeq.define(
	"borrow_items",
	{
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
		book_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "books",
				key: "id",
			},
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		returned_at: {
			type: DataTypes.DATE,
		},
	},
	{
		Sequelize,
		timestamps: false,
		tableName: "borrow_items",
	}
);

newSeq
	.sync()
	.then(() => {
		console.log("borrow_items table has sync");
	})
	.catch((err) => {
		console.log(`sync error : `, err);
	});

export const addBorrowItem = async (user_idPrm, book_idPrm, statusPrm, returned_atPrm) => {
	const create = await Borrow_item.create({
		user_id: user_idPrm,
		book_id: book_idPrm,
		status: statusPrm,
		returned_at: returned_atPrm,
	});
	console.log("borrow item id ", create.id, " added");
	return create;
};

export const getBorrowItemByID = async (user_idPrm) => {
	const res = await Borrow_item.findAll({
		where: {
			user_id: user_idPrm,
		},
	});
	return res;
};

export const allBorrowItems = async () => {
	const response = await Borrow_item.findAll();
	return response;
};

export const deleteBorrowItem = async (idPrm) => {
	const response = await Borrow_item.destroy({
		where: {
			id: idPrm,
		},
	});
	return response;
};

export default Borrow_item;
