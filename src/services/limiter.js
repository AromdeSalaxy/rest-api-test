const RateLimit = require("express-rate-limit");
export const limiter = new RateLimit({
  windowMs: 1 * 10 * 1000, // 10sec
  max: 100, // limit each IP to 100 requests per windowMs
  delayMs: 0, // disable delaying - full speed until the max limit is reached
});
