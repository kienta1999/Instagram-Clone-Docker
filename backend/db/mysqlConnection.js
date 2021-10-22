const mysql = require("mysql2");
const { promisify } = require("util");
require("dotenv").config();

const conn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PSW,
  database: "instagram",
});
conn.query(
  "CREATE TABLE IF NOT EXISTS users (id MEDIUMINT NOT NULL AUTO_INCREMENT, username VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))",
  function (err, result) {
    if (err) throw err;
    console.log("User table created");
  }
);
const query = promisify(conn.query).bind(conn);

module.exports = {
  conn,
  query,
};