import aj from "../config/arcjet.js";
import { NODE_ENV } from "../config/env.js";

const arcjetMiddleware = async (req, res, next) => {
  // Skip Arcjet completely in development
  if (NODE_ENV !== "production") {
    console.log(`� ArcJet: Skipped in development mode`);
    return next();
  }

  // Only run Arcjet protection in production
  try {
    console.log(`� ArcJet: Running protection in production mode`);

    const decision = await aj.protect(req, { requested: 1 });

    if (decision.isDenied && decision.reason.type !== "ERROR") {
      if (decision.reason.isRateLimit) {
        return res.status(429).json({
          status: "fail",
          message: "Too many requests, please try again later.",
        });
      }
      if (decision.reason.isBot) {
        return res.status(403).json({
          status: "fail",
          message: "Bots are not allowed.",
        });
      }
      return res.status(403).json({
        status: "fail",
        message: "Access denied.",
      });
    }
    next();
  } catch (error) {
    console.log(`ArcJet Middleware Error: ${error.message}`);
    next(); // Continue on error to avoid breaking the app
  }
};
export default arcjetMiddleware;
