import express from "express";
import { createASchool, allSchools } from "../views/schools.js";
import { isReqBodyPresent } from "../middlewares/isReqBodyPresent.js";
export const schoolsRouter  = express.Router()

schoolsRouter.get("", allSchools)

schoolsRouter.post("", isReqBodyPresent, createASchool);