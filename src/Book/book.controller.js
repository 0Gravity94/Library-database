import Book, { addBook, allBooks, deleteBook, getBookByID } from "./books.model.js";

export const insertData = async (req, res) => {
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

	const respModel = await addBook(title, genre_id, author_id, status, quantity);

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

	const respModel = await getBookByID(id);

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

export const getAllBooks = async (req, res) => {
	const respModel = await allBooks();

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

export const deleteBookByID = (req, res) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: `Cannot delete book / Book id ${id} doesn't exist`,
			},
			data: {},
		});
	}

	const respModel = deleteBook(id);

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

export const updateBookByID = async (req, res) => {
	try {
		await Book.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.status(201).json({ msg: "success update book" });
	} catch (err) {
		console.log(err);
	}
};
