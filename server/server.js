import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";

import postRoutes from "./routes/postRoutes";
import dalleRoutes from "./routes/dalleRoutes";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.use("api/posts", postRoutes);
app.use("api/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.send("API is running....");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
