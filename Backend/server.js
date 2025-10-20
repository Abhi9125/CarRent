import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDb from "./config/db.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

await connectDb();
// UserController();

app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running the the ${PORT}`);
});
