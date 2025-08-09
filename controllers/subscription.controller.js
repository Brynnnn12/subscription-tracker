import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.create({
      user: req.user.id,
      ...req.body,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
