import { addGenre, getGenreByID } from "./genres.model.js";

export const newGenre = (req, res) => {
	const { genre_name } = req.body;

	if (!genre_name) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: "Validation error",
			},
			data: {},
		});
	}

	const respModel = addGenre(genre_name);

	return res.status(200).json({
		meta: {
			code: "01-200",
			message: "success insert",
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

	const respModel = await getGenreByID(id);

	return res.status(200).json({
		meta: {
			code: "01-200",
			message: "success insert",
		},
		data: {
			id: respModel,
		},
	});
};
