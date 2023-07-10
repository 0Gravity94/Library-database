import User, { addUser, allUsers, deleteUser, getUserByID } from "./user.model.js";

export const newUser = (req, res) => {
	const { username, password, role } = req.body;

	if (!(username && password && role)) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: "Validation error",
			},
			data: {},
		});
	}

	const respModel = addUser(username, password, role);

	return res.status(200).json({
		meta: {
			code: "01-200",
			message: `new member : ${username}`,
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

	const respModel = await getUserByID(id);

	return res.status(200).json({
		meta: {
			code: "01-200",
			message: `get user by id: ${id}`,
		},
		data: {
			respModel,
		},
	});
};

export const getAllUsers = async (req, res) => {
	const respModel = await allUsers();

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

export const deleteUserByID = (req, res) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: "Cannot delete user",
			},
			data: {},
		});
	}

	const respModel = deleteUser(id);

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

export const updateUserByID = async (req, res) => {
	try {
		await User.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.status(201).json({ msg: "success update user" });
	} catch (err) {
		console.log(err);
	}
};
