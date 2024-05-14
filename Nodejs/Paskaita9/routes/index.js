import express from "express";
import peopleRouter from "./peopleRouter.js";
import phoneRouter from "./phoneRouter.js"

const router = express.Router();

router.use(phoneRouter);
router.use(peopleRouter);

export default router;