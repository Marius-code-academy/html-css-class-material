import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const { MONGO_URI, PORT } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "todo" })
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log("Failed to connect to DB"));
