const mysql = require("mysql2");
require("dotenv").config();

module.exports = () => {
  const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PSW,
  });
  conn.connect((err) => {
    if (err) throw err;
    console.log("Connected to the MySql DB");
    conn.query(
      "CREATE DATABASE IF NOT EXISTS instagram",
      function (err, result) {
        if (err) throw err;
        console.log("Database instagram created");
      }
    );
  });
};
