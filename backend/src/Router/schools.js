import express from "express";
import { createASchool, allSchools } from "../views/schools.js";
export const schoolsRouter  = express.Router()

schoolsRouter.get("", allSchools)

schoolsRouter.post("", createASchool);