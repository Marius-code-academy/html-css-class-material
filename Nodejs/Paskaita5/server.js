import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.port;
const app = express();

var a = 4;

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
