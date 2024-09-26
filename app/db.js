import mongoose from "mongoose";
import { config } from "dotenv";

export const connectDB = async () => {
  try {
    config();
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to DB!");
  } catch (error) {
    console.log("Failed to connect to DB!");
    console.log(error);
  }
};
