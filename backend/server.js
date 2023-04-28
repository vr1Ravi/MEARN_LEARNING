import { app } from "./app.js";
import { connectDatabase } from "./config/database.js";
import cloudinary from "cloudinary";
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
connectDatabase(); // database connection
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on ${port}`));
