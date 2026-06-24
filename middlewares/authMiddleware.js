const jwt = require("jsonwebtoken");

const verificarToken = (req, res, next) => {

    const header = req.headers["authorization"];

    if (!header) {
        return res.status(401).json({
            mensaje: "Token requerido"
        });
    }

    const token = header.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, usuario) => {

        if (err) {
            return res.status(403).json({
                mensaje: "Token inválido"
            });
        }

        req.usuario = usuario;

        next();

    });

}

module.exports = verificarToken;