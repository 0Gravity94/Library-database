import jwtController from "jsonwebtoken";
import { getUserByUsername } from "../user.model.js";
import Auth, { addAuthentication, allAuths, deleteAuth, getAuthByID } from "./auth.model.js";

export const insertAuth = (req, res) => {
	const { user_id, password, role } = req.body;

	if (!(user_id && password && role)) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: "Validation error",
			},
			data: {},
		});
	}

	const respModel = addAuthentication(user_id, password, role);

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

	const respModel = await getAuthByID(id);

	return res.status(200).json({
		meta: {
			code: "01-200",
			message: `get authentication by id: ${id}`,
		},
		data: {
			respModel,
		},
	});
};

export const getAllAuths = async (req, res) => {
	const respModel = await allAuths();

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

export const deleteAuthByID = (req, res) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: "Cannot delete authentication",
			},
			data: {},
		});
	}

	const respModel = deleteAuth(id);

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

export const updateAuthByID = async (req, res) => {
	try {
		await Auth.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.status(201).json({ msg: "success update author" });
	} catch (err) {
		console.log(err);
	}
};

export const loginAuth = async (req, res) => {
	const { username, password } = req.body;

	if (!(username && password)) {
		return res.status(400).json({
			meta: {
				code: "00-400",
				message: "Validation error",
			},
			data: {},
		});
	}

	const user = await getUserByUsername(username);

	if (!user) {
		return res.status(400).json({
			meta: {
				code: "00-404",
				message: "User not found",
			},
			data: {},
		});
	}

	if (user.password === password) {
		const token = jwtController.sign(
			{
				userid: user.id, //payload (data yang nanti ditampilkan)
				name: user.full_name,
			},
			"silahkan",
			{
				expiresIn: "1d",
			}
		);
		return req.status(200).json({
			meta: {
				code: "00-200",
				message: "success login",
			},
			data: {
				token: token,
			},
		});
	}
	return res.status(400).json({
		meta: {
			code: "00-400",
			message: "Wrong password",
		},
		data: {},
	});
};
