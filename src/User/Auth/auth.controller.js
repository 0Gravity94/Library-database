import jwtController from "jsonwebtoken";
import { getUserByUsername } from "../user.model.js";
import { addAuthentication, allAuths, getAuthByID } from "./auth.model.js";

export const insertAuth = (req, res) => {
	const { user_id, password } = req.body;

	if (!(user_id && password)) {
		return res.status(400).json({
			meta: {
				code: "01-400",
				message: "Validation error",
			},
			data: {},
		});
	}

	const respModel = addAuthentication(user_id, password);

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

	const respModel = await getAuthByID(id);

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
