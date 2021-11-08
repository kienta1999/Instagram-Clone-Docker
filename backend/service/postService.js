const db = require("../db/db.js");
const Post = db.posts;
const { somethingWrong } = require("./errors");

const createPost = async (userId, content) => {
  try {
    return await Post.create({ userId, content });
  } catch (error) {
    throw error?.message || { error: somethingWrong };
  }
};

const getAllPost = async () => {
  try {
    return await Post.findAll();
  } catch (error) {
    throw error?.message || { error: somethingWrong };
  }
};

module.exports = { createPost, getAllPost };
