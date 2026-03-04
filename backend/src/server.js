// The below can be used when the type is set to "module" in package.json file.
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
); // Enable CORS for all routes

//middleware
app.use(express.json()); // this middleware is used to parse JSON bodies: req.body
app.use(rateLimiter); // custom rate limiter middleware

//our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Request method: ${req.method}, Request URL: ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
