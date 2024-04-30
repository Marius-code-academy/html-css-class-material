import express from "express";
import { getUsers, getUserById, addUser, deleteUserById } from "./controllers.js";

const router = express.Router();

// GET - duos visus userius
// GET - duos viena useri pagal jo id
// POST - prideda nauja useri
// DELETE - istrina useri pagal id

router.get("/user", getUsers);
// router.get("/user/:id/book/:bookId", getUserById)
router.get("/user/:id", getUserById);

router.post("/user", addUser);

router.delete("/user/:id", deleteUserById)

export default router;
