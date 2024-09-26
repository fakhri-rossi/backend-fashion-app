import express from "express";
import { config } from "dotenv";
import { connectDB } from "./db.js";

config();
connectDB();

export const app = express();
