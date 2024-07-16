import express from "express";
import { createUser } from "../controllers/userControllers.js";
import { validateUser } from "../middlewares/userMiddleware.js";
import { errMiddleware } from "../middlewares/errorMiddleware.js";

const router = express.Router();

router.get("/users");

router.post("/users", validateUser, createUser, errMiddleware);

export default router;