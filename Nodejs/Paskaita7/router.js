import express from "express";
import { addPhone, deletePhoneById, getPhoneById, getPhones, updatePhoneById } from "./controllers.js";

const router = express.Router();

router.get("/phone", getPhones);

router.get("/phone/:id", getPhoneById);

router.post("/phone", addPhone);

router.put("/phone/:id", updatePhoneById);

router.delete("/phone/:id", deletePhoneById)

export default router;