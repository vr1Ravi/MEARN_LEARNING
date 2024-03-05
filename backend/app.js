import express from "express";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/User.js";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config({
  path: "./backend/config/config.env",
});
export const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" })); //This middleware is used to parse incoming JSON data in the request body and make it available in req.body object of the route handler.
app.use(
  express.urlencoded({ extended: true, limit: "50mb", parameterLimit: 50000 })
); //middleware is used to parse incoming requests with URL-encoded payloads.
app.use(cookieParser());
app.use("/api/v1", userRouter); //using Routes

app.use(express.static(path.resolve("./frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./frontend/dist/index.html"));
});
