import "dotenv/config";
import { logRequest, logError } from "./services/logger";
import { limiter } from "./services/limiter";
import { auth } from "./services/passport";
import authRoute from "./routes/auth";
import usersRoute from "./routes/users";
import postsRoute from "./routes/posts";
import swaggerUi from "swagger-ui-express";
const swaggerDocument = require("./swagger");
var express = require("express");
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
import("./configs/database");
import("./models");

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use(require("express-status-monitor")());
app.use(limiter);
app.use(logRequest);
app.use(logError);

app.use("/auth", authRoute);
app.use("/users", auth, usersRoute);
app.use("/posts", postsRoute);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT, () => {
  console.log("api started port", process.env.PORT || 3001);
});
