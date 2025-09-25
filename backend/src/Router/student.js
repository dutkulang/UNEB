import express from "express";
import { isReqBodyPresent } from "../middlewares/isReqBodyPresent.js";
import { createStudent } from "../views/students.js";
export const studentRouter = express.Router()

studentRouter.post('', isReqBodyPresent, createStudent)