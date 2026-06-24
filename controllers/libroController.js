const Libro = require("../models/Libro");

// GET
exports.obtenerLibros = async (req, res) => {
    const libros = await Libro.findAll();
    res.json(libros);
};

// GET por ID
exports.obtenerLibro = async (req, res) => {
    const libro = await Libro.findByPk(req.params.id);
    res.json(libro);
};

// POST
exports.crearLibro = async (req, res) => {
    const libro = await Libro.create(req.body);
    res.json(libro);
};

// PUT
exports.actualizarLibro = async (req, res) => {
    await Libro.update(req.body, {
        where: {
            id: req.params.id
        }
    });

    res.json({
        mensaje: "Libro actualizado"
    });
};

// DELETE
exports.eliminarLibro = async (req, res) => {
    await Libro.destroy({
        where: {
            id: req.params.id
        }
    });

    res.json({
        mensaje: "Libro eliminado"
    });
};