import { DataTypes } from "sequelize";
import { newSeq } from "../../../connection.js";

const Borrow_item = newSeq.define("borrow_items", {
	borow_id: {
		type: DataTypes.INTEGER,
		references: {
			model: "borrows",
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
});

newSeq
	.sync()
	.then(() => {
		console.log("borrow_items table has sync");
	})
	.catch((err) => {
		console.log(`sync error : `, err);
	});

export default Borrow_item;
