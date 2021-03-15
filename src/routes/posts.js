import express from "express";
const router = express.Router();
import * as controller from "../controllers/posts";
import { auth } from "../services/passport";

router.get("/", controller.getAll);
router.get("/:post_id", controller.getById);
router.post("/create", auth, controller.create);
router.patch("/update", auth, controller.update);
router.delete("/delete/:post_id", auth, controller.destroy);

export default router;
