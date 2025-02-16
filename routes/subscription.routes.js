import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "GET all Subscriptions " });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "GET Subscriptions details " });
});

subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "CREATE a Subscriptions " });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE a Subscriptions " });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE a Subscriptions " });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "GET all user Subscriptions " });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "CANCEL a Subscriptions " });
});

subscriptionRouter.get("/upcoming-renews", (req, res) => {
  res.send({ title: "GET upcoming renews " });
});

export default subscriptionRouter;
