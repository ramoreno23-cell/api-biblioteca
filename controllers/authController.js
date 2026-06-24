const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {

    const { correo, password } = req.body;

    const usuario = await Usuario.findOne({
        where: {
            correo
        }
    });

    if (!usuario) {
        return res.status(401).json({
            mensaje: "Usuario no encontrado"
        });
    }

    const passwordValida = await bcrypt.compare(
        password,
        usuario.password
    );

    if (!passwordValida) {
        return res.status(401).json({
            mensaje: "Contraseña incorrecta"
        });
    }

    const token = jwt.sign(
        {
            id: usuario.id,
            correo: usuario.correo
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "2h"
        }
    );

    res.json({
        mensaje: "Login correcto",
        token
    });

}