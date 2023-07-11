import Borrow_item, { addBorrowItem, allBorrowItems, deleteBorrowItem, getBorrowItemByID } from "./items.model.js";

export const borrowItem = async (req, res) => {
	const { user_id, book_id, status, returned_at } = req.body;

	if (!(user_id && book_id && status)) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: "Validation error",
			},
			data: {},
		});
	}

	const respModel = await addBorrowItem(user_id, book_id, status, returned_at);

	return res.status(200).json({
		meta: {
			code: "01-200",
			message: "success insert",
		},
		data: {
			respModel,
		},
	});
};

export const getByID = async (req, res) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: "Validation error",
			},
			data: {},
		});
	}

	const respModel = await getBorrowItemByID(id);

	return res.status(200).json({
		meta: {
			code: "01-200",
			message: `get borrow items by user id: ${id}`,
		},
		data: {
			respModel,
		},
	});
};

export const getAllBorrowItems = async (req, res) => {
	const respModel = await allBorrowItems();

	return res.status(200).json({
		meta: {
			code: "01-200",
			message: "success get",
		},
		data: {
			respModel,
		},
	});
};

export const deleteBorrowItemByID = (req, res) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: "Cannot delete borrow item",
			},
			data: {},
		});
	}

	const respModel = deleteBorrowItem(id);

	return res.status(200).json({
		meta: {
			code: "01-200",
			message: "delete success",
		},
		data: {
			respModel,
		},
	});
};

export const updateBorrowItemByID = async (req, res) => {
	try {
		await Borrow_item.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.status(201).json({ msg: `success update borrow item` });
	} catch (err) {
		console.log(err);
	}
};
