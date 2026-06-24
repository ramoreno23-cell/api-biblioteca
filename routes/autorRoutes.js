const express = require("express");

const router = express.Router();

const controlador = require("../controllers/autorController");

const verificarToken = require("../middlewares/authMiddleware");
router.get("/", verificarToken, controlador.obtenerAutores);
router.get("/:id", verificarToken, controlador.obtenerAutor);
router.post("/", verificarToken, controlador.crearAutor);
router.put("/:id", verificarToken, controlador.actualizarAutor);
router.delete("/:id", verificarToken, controlador.eliminarAutor);

module.exports = router;