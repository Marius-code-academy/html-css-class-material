import express from "express";
import { addNewTablet, getTablets } from "../controllers/tabletControllers.js";

const router = express.Router();

router.get("/", getTablets)

router.post("/", addNewTablet)

export default router;