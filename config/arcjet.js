import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ARCJET_KEY, NODE_ENV } from "./env.js";

// Different rules for production vs development
const developmentRules = [
  shield({ mode: "DRY_RUN" }),
  detectBot({
    mode: "DRY_RUN",
    allow: ["CATEGORY:SEARCH_ENGINE", "CATEGORY:PREVIEW", "CATEGORY:MONITOR"],
  }),
  // Very lenient rate limiting for development
  tokenBucket({
    mode: "DRY_RUN",
    refillRate: 1000,
    interval: "1s", // use string format for interval
    capacity: 1000,
  }),
];

const productionRules = [
  shield({ mode: "LIVE" }),
  detectBot({
    mode: "LIVE",
    allow: ["CATEGORY:SEARCH_ENGINE", "CATEGORY:PREVIEW", "CATEGORY:MONITOR"],
  }),
  tokenBucket({
    mode: "LIVE",
    refillRate: 5,
    interval: "10s", // use string format for interval
    capacity: 10,
  }),
];

const aj = arcjet({
  // Get your site key from https://app.arcjet.com and set it as an environment

  // variable rather than hard coding.

  key: ARCJET_KEY,

  rules: NODE_ENV === "production" ? productionRules : developmentRules,
});

export default aj;
