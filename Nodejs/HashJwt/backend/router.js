import express from "express";
import { getUsers, loginUser, registerNewUser } from "./controllers/userController.js";
import { validateJwt } from "./middleware/validateJwtMiddleware.js";

const router = express.Router();

router.post("/register", registerNewUser);
router.post("/login", loginUser);
router.get("/users", validateJwt, getUsers);

export default router;
