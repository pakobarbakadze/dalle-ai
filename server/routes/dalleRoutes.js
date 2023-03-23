import express from "express";

const router = express.Router();

import { createDalleImage } from "../controllers/dalleController";

router.route("/").post(createDalleImage);

export default router;
