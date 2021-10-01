import Router from "express";
import { signup, signin } from "../controllers/auth.js";
const router = Router();

//REGISTER
router.post("/register", signup);

//LOGIN
router.post("/login", signin);

export default router;
