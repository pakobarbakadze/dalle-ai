import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.use("/api/posts", postRoutes);
app.use("/api/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.send("API is running....");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
