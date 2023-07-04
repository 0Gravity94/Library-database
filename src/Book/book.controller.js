import { addBook, getBookByID } from "./books.model.js";

export const insertData = (req, res) => {
	const { title, genre_id, author_id, status, quantity } = req.body;

	if (!(title && genre_id && author_id)) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: "Validation error",
			},
			data: {},
		});
	}

	const respModel = addBook(title, genre_id, author_id, status, quantity);

	return res.status(200).json({
		meta: {
			code: "01-200",
			message: "succes insert",
		},
		data: {
			id: respModel,
		},
	});
};

export const getByID = async (req, res) => {
	const { id } = req.param;

	if (!id) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: "Validation error",
			},
			data: {},
		});
	}

	const respModel = await getBookByID(id);

	return res.status(200).json({
		meta: {
			code: "01-200",
			message: "succes insert",
		},
		data: {
			id: respModel,
		},
	});
};
