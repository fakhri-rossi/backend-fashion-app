import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;
import { app } from "./app/app.js";

app.listen(PORT, () => console.log(`APP STARTED ON PORT ${PORT}!`));
