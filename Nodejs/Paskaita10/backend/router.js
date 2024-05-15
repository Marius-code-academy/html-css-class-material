import express from "express";
import { createProduct, getProducts, updateProduct } from "./controllers.js";

const router = express.Router();

router.get("/products", getProducts);

router.post("/products", createProduct);

router.put("/products/:id", updateProduct)

export default router;