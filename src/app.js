import "dotenv/config";

var express = require("express");
var app = express();

import authRoute from "./routes/auth";
import { logRequest, logError } from "./services/logger";
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use(logRequest);
app.use(logError);
app.use("/auth", authRoute);

app.listen(process.env.PORT, () => {
  console.log("api started port", process.env.PORT);
});
