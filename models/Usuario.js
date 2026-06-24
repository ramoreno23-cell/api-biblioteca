const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Usuario = sequelize.define("usuarios",{

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    nombre:{
        type:DataTypes.STRING
    },

    correo:{
        type:DataTypes.STRING
    },

    password:{
        type:DataTypes.STRING
    }

},
{
    timestamps:false
});

module.exports = Usuario;