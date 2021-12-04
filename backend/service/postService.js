const db = require("../db/db.js");
const Post = db.posts;
const { somethingWrong } = require("./errors");
const { getUser } = require("./userService");

const createPost = async (userId, content) => {
  try {
    return await Post.create({ userId, content });
  } catch (error) {
    throw error?.message || { error: somethingWrong };
  }
};

const getAllPost = async () => {
  try {
    const posts = (await Post.findAll({ include: "user" })).map(
      (d) => d["dataValues"]
    );
    return posts;
  } catch (error) {
    throw error?.message || { error: somethingWrong };
  }
};

const getAllUserPost = async (userId) => {
  try {
    return await Post.findAll({ where: { userId } });
  } catch (error) {
    throw error?.message || { error: somethingWrong };
  }
};

const updatePost = async (postId, userId, content) => {
  try {
    const post = await Post.findOne({
      where: { id: postId },
    });
    if (!post) {
      throw { message: "Post not found" };
    }
    if (post.userId == userId) {
      await Post.update({ content }, { where: { id: postId } });
      return { success: true };
    }
    throw { message: "You are not authorized to update this post" };
  } catch (error) {
    throw error?.message || somethingWrong;
  }
};

const deletePost = async (postId, userId) => {
  try {
    const post = await Post.findOne({
      where: { id: postId },
    });
    if (!post) {
      throw { message: "Post not found" };
    }
    if (post.userId == userId) {
      await Post.destroy({ where: { id: postId } });
      return { success: true };
    }
    throw { message: "You are not authorized to delete this post" };
  } catch (error) {
    throw error?.message || somethingWrong;
  }
};

const getPost = async (postId, userId) => {
  try {
    const post = await Post.findOne({
      where: { id: postId, userId },
    });
    if (!post) {
      throw { message: "Post not found" };
    }
    return post;
  } catch (error) {
    throw error?.message || somethingWrong;
  }
};

module.exports = {
  createPost,
  getAllPost,
  getAllUserPost,
  updatePost,
  deletePost,
  getPost,
};
