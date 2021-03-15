import express from "express";
const router = express.Router();

router.get("/", function (req, res) {
  res.send("auth");
});

export default router;
