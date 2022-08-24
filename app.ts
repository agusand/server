import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import compression from "compression";
import cors from "cors";

import router from "./src/routers/index";
import connect from "./dbConnect";

dotenv.config();
const app = express();
connect();
const PORT = process.env.PORT || 8080;

// Settings
app.set("PORT", PORT);

// Middlewares
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(compression());
app.use(cors());

// Routes
app.use("/api", router);

export default app;
