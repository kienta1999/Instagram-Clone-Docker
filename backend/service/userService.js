const db = require("../db/db.js");
const { usernameExisted } = require("./errors.js");
const User = db.users;

const createUser = async (username, password, email) => {
  console.log({ username, password, email });
  try {
    const existedUser = await User.findOne({ where: { username } });
    if (existedUser) {
      throw usernameExisted;
    }
    await User.create({ username, password, email });
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser };
