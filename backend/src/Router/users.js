import express from "express";
import { allUsers, deleteUser } from "../views/users.js";
export const userRouter = express.Router()

userRouter.get("", allUsers);
userRouter.delete("/:userId", deleteUser);