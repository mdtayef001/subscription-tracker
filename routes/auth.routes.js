import express from "express";

const authRouter = express.Router();

authRouter.post("/sign-up", (req, res) => {
  res.send({ title: "Signup route" });
});

authRouter.post("/sign-in", (req, res) => {
  res.send({ title: "Signin route" });
});

authRouter.post("/sign-out", (req, res) => {
  res.send({ title: "Signout route" });
});

export default authRouter;
