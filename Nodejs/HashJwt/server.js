import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./router.js";

dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "users" })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
