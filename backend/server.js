import { configDotenv } from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/config.js";
import foodRouter from "./routes/foodRoute.js";

configDotenv();
connectDB();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/food", foodRouter);
app.use(express.static("./uploads"));

app.get("/", (req, res) => {
  res.send("hy");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
