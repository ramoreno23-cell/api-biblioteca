const express = require("express");

const router = express.Router();

const controlador = require("../controllers/usuarioController");

const verificarToken = require("../middlewares/authMiddleware");

router.get("/", verificarToken, controlador.obtenerUsuarios);

router.get("/:id", verificarToken, controlador.obtenerUsuario);

router.post("/", verificarToken, controlador.crearUsuario);

router.put("/:id", verificarToken, controlador.actualizarUsuario);

router.delete("/:id", verificarToken, controlador.eliminarUsuario);

module.exports = router;