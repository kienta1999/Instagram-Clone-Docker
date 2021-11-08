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

module.exports = { createPost, getAllPost, getAllUserPost };
