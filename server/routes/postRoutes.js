import express from "express";

const router = express.Router();

import { getPosts, uploadPost } from "../controllers/postController.js";

router.route("/").post(uploadPost).get(getPosts);

export default router;
