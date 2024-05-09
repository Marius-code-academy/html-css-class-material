import express from "express";
import { addPhone, deletePhoneById, getPhoneById, getPhones, updatePhoneById } from "../controllers/phoneControllers.js";

const router = express.Router();

router.get("/", getPhones);

router.get("/:id", getPhoneById);

router.post("/", addPhone);

router.put("/:id", updatePhoneById);

router.delete("/:id", deletePhoneById)

export default router;