import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";
const port = process.env.PORT || 5000;
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectDB from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middlewares.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.use(errorMiddleware);

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connectDB();
});
