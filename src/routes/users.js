import express from "express";
const router = express.Router();
import * as controller from "../controllers/users";

router.get("/profile", controller.getProfile);

export default router;
