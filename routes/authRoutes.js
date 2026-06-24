const express = require("express");

const router = express.Router();

const controlador = require("../controllers/authController");

router.post("/login", controlador.login);

module.exports = router;