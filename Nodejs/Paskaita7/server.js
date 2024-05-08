import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/index.js"

dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose.connect(MONGO_URI, { dbName: "techShop" }).then(() => console.log("Connected to mongo DB")).catch(() => console.log("Failed to connect"))

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`))