const Autor = require("../models/Autor");

// GET
exports.obtenerAutores = async (req, res) => {
    const autores = await Autor.findAll();
    res.json(autores);
};

// GET por ID
exports.obtenerAutor = async (req, res) => {
    const autor = await Autor.findByPk(req.params.id);
    res.json(autor);
};

// POST
exports.crearAutor = async (req, res) => {
    const autor = await Autor.create(req.body);
    res.json(autor);
};

// PUT
exports.actualizarAutor = async (req, res) => {
    await Autor.update(req.body, {
        where: {
            id: req.params.id
        }
    });

    res.json({
        mensaje: "Autor actualizado"
    });
};

// DELETE
exports.eliminarAutor = async (req, res) => {
    await Autor.destroy({
        where: {
            id: req.params.id
        }
    });

    res.json({
        mensaje: "Autor eliminado"
    });
};