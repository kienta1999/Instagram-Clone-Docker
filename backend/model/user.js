const { conn, query } = require("../mysqlConnetion");

class User {
  constructor(id) {
    this.id = id;
    this.conn = conn;
  }
  async getUser() {
    const sql = "SELECT * FROM users WHERE id = ?";
    try {
      const userInfor = await query(sql, [this.id]);
      if (userInfor.length === 0) {
        throw { id: this.id, error: "user id not exist" };
      }
      return userInfor[0];
    } catch (error) {
      throw error;
    }
  }
}

const addUser = async (username, password) => {
  console.log({ username, password });
  let sql = "INSERT INTO users (username, password) VALUES (?, ?)";
  try {
    return await query(sql, [username, password]);
  } catch (error) {
    throw error;
  }
};

module.exports = { addUser, User };
