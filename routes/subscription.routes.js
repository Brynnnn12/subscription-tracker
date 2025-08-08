import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send("Subscription Home Page");
});

// Get subscription by id
subscriptionRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Get subscription with id ${id}`);
});

// Create new subscription
subscriptionRouter.post("/", (req, res) => {
  // const subscriptionData = req.body;
  res.send("Create new subscription");
});

// Update subscription by id
subscriptionRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  // const updatedData = req.body;
  res.send(`Update subscription with id ${id}`);
});

// Delete subscription by id
subscriptionRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Delete subscription with id ${id}`);
});

subscriptionRouter.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Get subscriptions for user with id ${id}`);
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  const { id } = req.params;
  res.send(`Cancel subscription with id ${id}`);
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send("Get upcoming renewals");
});

export default subscriptionRouter;
