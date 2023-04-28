import express from "express";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/User.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./backend/config/config.env",
});
export const app = express();

app.use(express.json()); //This middleware is used to parse incoming JSON data in the request body and make it available in req.body object of the route handler.
app.use(express.urlencoded({ extended: true, limit: "50mb" })); //middleware is used to parse incoming requests with URL-encoded payloads.
app.use(cookieParser());
app.use("/api/v1", userRouter); //using Routes

app.get("/", (req, res) => {
  res.end("hello");
});
