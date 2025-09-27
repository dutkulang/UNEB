/**
 * auth handles both school registeration and login
 */
import express from "express";
import { signUp } from "../views/signup.js";
import { login } from "../views/login.js";
import { isReqBodyPresent } from "../middlewares/isReqBodyPresent.js"; 
export const authRouter = express.Router()

authRouter.post('/signup', isReqBodyPresent, signUp);
authRouter.post("/login",isReqBodyPresent ,login)