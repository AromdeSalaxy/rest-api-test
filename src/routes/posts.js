import express from "express";
const router = express.Router();
import * as controller from "../controllers/posts";

router.get("/", controller.getAll);
router.get("/:post_id", controller.getById);
router.post("/create", controller.create);
router.patch("/update", controller.update);
router.delete("/delete", controller.destroy);

export default router;
