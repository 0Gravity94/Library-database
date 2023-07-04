import { addUser, getUserByID } from "./user.model.js";

export const newUser = (req, res) => {
	const { full_name } = req.body;

	if (!full_name) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: "Validation error",
			},
			data: {},
		});
	}

	const respModel = addUser(full_name);

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

	const respModel = await getUserByID(id);

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
