import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign_up", (req, res) => {
  res.send("Sign Up Page");
});
authRouter.post("/sign_in", (req, res) => {
  res.send("Sign In Page");
});
authRouter.post("/sign_out", (req, res) => {
  res.send("Sign Out Page");
});

export default authRouter;
