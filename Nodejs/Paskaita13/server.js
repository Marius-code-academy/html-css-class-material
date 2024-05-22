import express from "express";
import dotenv from "dotenv";
import router from "./router.js"

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use(router)

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`))