import express from "express";

const router = express.Router();

import { createDalleImage } from "../controllers/dalleController.js";

router.route("/").post(createDalleImage);

export default router;
