const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "biblioteca_api",
    "postgres",
    "Alexismoreno1.",
    {
        host: "localhost",
        dialect: "postgres"
    }
);

module.exports = sequelize;