const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Libro = sequelize.define("libros", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    editorial: {
        type: DataTypes.STRING
    },
    anio_publicacion: {
        type: DataTypes.INTEGER
    },
    autor_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Libro;