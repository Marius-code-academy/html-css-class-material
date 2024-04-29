import express from "express";
import { labasHandler } from "../controllers/helloWorldControllers.js";

const router = express.Router();

router.get("/labas", labasHandler)

export default router;