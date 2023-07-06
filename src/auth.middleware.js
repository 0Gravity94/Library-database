import JSONtoken from "jsonwebtoken";

export const tokenVerify = (req, res, next) => {
	const auth = req.headers["authorization"];

	if (!auth) {
		return res.status(400).json({
			meta: {
				code: "AUTH-400",
				message: "Missing jwt",
			},
			data: {},
		});
	}

	const token = auth.split(" ")[1];

	try {
		const decode = JSONtoken.verify(token, "silahkan");
	} catch (error) {
		return res.status(401).json({
			meta: {
				code: "AUTH-401",
				message: "Invalid bearer",
			},
			data: {},
		});
	}

	return next(); //lanjut ke middleware selanjutnya
};

// Client ==> tokenVerify===> fungsiAPI
// Client ===> tokenVerify ===> Client
