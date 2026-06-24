const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Autor = sequelize.define("autores", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nacionalidad: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = Autor;