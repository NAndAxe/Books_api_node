import express from "express";
import * as controllers from "../controllers/booksControllers.js";

const router = express.Router();

router.get("/", () => {});
router.get("/:id", () => {});
router.post("/", () => {});
router.put("/:id", () => {});
router.delete("/", () => {});

export default router;
