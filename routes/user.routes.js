import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "GET all Users " });
});

userRouter.get("/:id", (req, res) => {
  res.send({ title: "GET  User details" });
});

userRouter.post("/", (req, res) => {
  res.send({ title: "CREATE a Users " });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE a Users " });
});
userRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE a Users " });
});

export default userRouter;
