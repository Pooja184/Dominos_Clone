import { Router } from "express";
import { registerUser } from "../controllers/auth.js";
// import { login, register } from "../controllers/user.controller.js";

const authRouter=Router();

authRouter.post('/register',registerUser)

// authRouter.post('/login',login)
export default authRouter;