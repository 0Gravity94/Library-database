import Author, { addAuthor, allAuthors, deleteAuthor, getAuthorByID } from "./author.model.js";

export const newAuthor = (req, res) => {
	const { full_name, gender, works } = req.body;

	if (!(full_name && gender)) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: "Validation error",
			},
			data: {},
		});
	}

	const respModel = addAuthor(full_name, gender, works);

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

	const respModel = await getAuthorByID(id);

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

export const getAllAuthors = async (req, res) => {
	const response = await allAuthors();

	return res.status(200).json({
		meta: {
			code: "01-200",
			message: "success get",
		},
		data: {
			response,
		},
	});
};

export const deleteAuthorByID = (req, res) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: "Cannot delete author",
			},
			data: {},
		});
	}

	const respModel = deleteAuthor(id);

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

// export const updateAuthorByID = async (req, res) => {
// 	const { id } = req.params;
// 	const { full_name, gender } = req.body;

// 	if (!id) {
// 		return res.status(400).json({
// 			meta: {
// 				code: "01-400",
// 				message: "Cannot update author",
// 			},
// 			data: {},
// 		});
// 	}

// 	const respModel = await updateAuthor(full_name, gender);

// 	return res.status(200).json({
// 		meta: {
// 			code: "01-200",
// 			message: "update success",
// 		},
// 		data: {
// 			respModel,
// 		},
// 	});
// };

export const updateAuthorByID = async (req, res) => {
	try {
		await Author.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.status(201).json({ msg: "success update author" });
	} catch (err) {
		console.log(err);
	}
};
