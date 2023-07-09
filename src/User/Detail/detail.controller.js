import Detail, { addDetail, allDetails, deleteUserDetail, getDetailByID } from "./detail.model.js";

export const newDetail = (req, res) => {
	const { user_id, phone, city, date_of_birth, gender } = req.body;

	if (!(user_id && phone && city && date_of_birth && gender)) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: "Validation error",
			},
			data: {},
		});
	}

	const respModel = addDetail(user_id, phone, city, date_of_birth, gender);

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

	const respModel = await getDetailByID(id);

	return res.status(200).json({
		meta: {
			code: "01-200",
			message: `get user detail by id: ${id}`,
		},
		data: {
			respModel,
		},
	});
};

export const getAllDetails = async (req, res) => {
	const respModel = await allDetails();

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

export const deleteDetailByID = (req, res) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: "Cannot delete detail",
			},
			data: {},
		});
	}

	const respModel = deleteUserDetail(id);

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

export const updateUserDetailByID = async (req, res) => {
	try {
		await Detail.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.status(201).json({ msg: "success update user detail" });
	} catch (err) {
		console.log(err);
	}
};
