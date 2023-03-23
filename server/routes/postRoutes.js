import express from "express";

const router = express.Router();

import { getPosts, uploadPost } from "../controllers/postController";

router.route("/").post(uploadPost).get(getPosts);

export default router;
