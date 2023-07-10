import { Router } from "express";
import { loginAuth } from "./auth.controller.js";

const router = Router();

router.post("/login", loginAuth);

export default router;
