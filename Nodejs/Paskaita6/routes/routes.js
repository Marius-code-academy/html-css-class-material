import express from "express";
import { getUsers, createUser } from "../controllers/user.js";

const router = express.Router();

router.get("/user", getUsers);

router.post("/user", createUser)

export default router;