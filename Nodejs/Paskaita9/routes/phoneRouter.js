import express from "express";
import { addPhone } from "../controllers/phone.js";

const router = express.Router();

router.post("/phone", addPhone)

export default router;