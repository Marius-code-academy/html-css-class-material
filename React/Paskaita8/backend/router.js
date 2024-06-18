import express from "express";
import { addTodo, deleteTodo, getTodos, updateTodo } from "./controllers.js";

const router = express.Router();

router.get("/todo", getTodos);
router.post("/todo", addTodo);
router.put("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

export default router;