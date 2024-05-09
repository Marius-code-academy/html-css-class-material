import express from "express"
import phoneRouter from "./phoneRouter.js"
import tabletsRouter from "./tabletsRouter.js"

const router = express.Router();

router.use("/phone", phoneRouter);
router.use("/tablet", tabletsRouter);

export default router;