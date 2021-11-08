const express = require("express");
const router = express.Router();
const { createPost, getAllPost } = require("../service/postService");

router.post("/post", async (req, res, next) => {
  const { userId, content } = req.body;
  try {
    const post = await createPost(userId, content);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/post", async (req, res, next) => {
  try {
    const posts = await getAllPost();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
