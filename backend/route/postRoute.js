const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPost,
  getAllUserPost,
  updatePost,
  deletePost,
  getPost,
} = require("../service/postService");

// add new post
router.post("/post", async (req, res, next) => {
  const { userId, content } = req.body;
  try {
    const post = await createPost(userId, content);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all posts
router.get("/posts", async (req, res, next) => {
  try {
    const posts = await getAllPost();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all post of specific user
router.get("/user/:id/posts", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const posts = await getAllUserPost(userId);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update a post content
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

// delete a post
router.delete("/user/:userId/post/:postId", async (req, res, next) => {
  const { userId, postId } = req.params;
  try {
    const status = await deletePost(postId, userId);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// get a specific post
router.get("/user/:userId/post/:postId", async (req, res, next) => {
  const { userId, postId } = req.params;
  try {
    const post = await getPost(postId, userId);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
