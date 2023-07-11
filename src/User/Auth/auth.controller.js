import jwtController from "jsonwebtoken";
import { getUserByUserName } from "../user.model.js";

export const loginAuth = async (req, res) => {
	const { username, password } = req.body;

	if (!username && !password) {
		return res.status(400).json({
			meta: {
				code: "00-400",
				message: "some input are required",
			},
			data: {},
		});
	}

	const user = await getUserByUserName(username);

	if (!user) {
		return res.status(404).json({
			meta: {
				code: "00-404",
				message: "Username not found",
			},
			data: {},
		});
	}

	if (user.password === password) {
		const token = jwtController.sign(
			{
				role: user.role,
				id: user.id,
			},
			"silahkan masuk",
			{
				expiresIn: "1d",
			}
		);
		return res.status(200).json({
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
