const express = require("express");

const router = express.Router();

const controlador = require("../controllers/libroController");

const verificarToken = require("../middlewares/authMiddleware");

router.get("/", verificarToken, controlador.obtenerLibros);
router.get("/:id", verificarToken, controlador.obtenerLibro);
router.post("/", verificarToken, controlador.crearLibro);
router.put("/:id", verificarToken, controlador.actualizarLibro);
router.delete("/:id", verificarToken, controlador.eliminarLibro);

module.exports = router;