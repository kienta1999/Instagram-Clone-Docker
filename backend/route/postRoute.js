const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPost,
  getAllUserPost,
  updatePost,
  deletePost,
} = require("../service/postService");

router.post("/post", async (req, res, next) => {
  const { userId, content } = req.body;
  try {
    const post = await createPost(userId, content);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/posts", async (req, res, next) => {
  try {
    const posts = await getAllPost();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/user/:id/posts", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const posts = await getAllUserPost(userId);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/user/:userId/post/:postId", async (req, res, next) => {
  const { userId, postId } = req.params;
  const { content } = req.body;
  try {
    const status = await updatePost(postId, userId, content);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.delete("/user/:userId/post/:postId", async (req, res, next) => {
  const { userId, postId } = req.params;
  try {
    const status = await deletePost(postId, userId);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
