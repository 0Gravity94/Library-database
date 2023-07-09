import Borrow, { addBorrow, allBorrows, deleteBorrow, getBorrowByID } from "./borrows.model.js";

export const insertBorrow = async (req, res) => {
	const { user_id } = req.body;

	if (!user_id) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: "Validation error",
			},
			data: {},
		});
	}

	const respModel = await addBorrow(user_id);

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

	const respModel = await getBorrowByID(id);

	return res.status(200).json({
		meta: {
			code: "01-200",
			message: `get borrow id: ${id}`,
		},
		data: {
			respModel,
		},
	});
};

export const getAllBorrows = async (req, res) => {
	const respModel = await allBorrows();

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

export const deleteBorrowByID = (req, res) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: `Cannot delete borrow id: ${id}`,
			},
			data: {},
		});
	}

	const respModel = deleteBorrow(id);

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

export const updateBorrowByID = async (req, res) => {
	try {
		await Borrow.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.status(201).json({ msg: "success update borrow" });
	} catch (err) {
		console.log(err);
	}
};
