import "dotenv/config";

var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log("api started port", process.env.PORT);
});
