import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("User Home Page");
});

// Get user by id
userRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Get user with id ${id}`);
});

// Create new user
userRouter.post("/", (req, res) => {
  // const userData = req.body;
  res.send("Create new user");
});

// Update user by id
userRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  // const updatedData = req.body;
  res.send(`Update user with id ${id}`);
});

// Delete user by id
userRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Delete user with id ${id}`);
});

export default userRouter;
