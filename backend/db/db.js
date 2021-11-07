const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("./db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: dbConfig.pool,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../model/user")(sequelize, Sequelize);

module.exports = db;
