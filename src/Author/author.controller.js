import { addAuthor, getAuthorByID } from "./author.model.js";

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

	const respModel = await getAuthorByID(id);

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
