import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);

// Get user by id
userRouter.get("/:id", authorize, getUser);

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
