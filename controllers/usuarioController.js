const Usuario = require("../models/Usuario");
exports.obtenerUsuarios = async(req,res)=>{

    const usuarios = await Usuario.findAll();

    res.json(usuarios);

}
exports.obtenerUsuario = async(req,res)=>{

    const usuario = await Usuario.findByPk(req.params.id);

    res.json(usuario);

}
exports.crearUsuario = async(req,res)=>{

    const usuario = await Usuario.create(req.body);

    res.json(usuario);

}
exports.actualizarUsuario = async(req,res)=>{

    await Usuario.update(req.body,{
        where:{
            id:req.params.id
        }
    });

    res.json({
        mensaje:"Usuario actualizado"
    });

}
exports.eliminarUsuario = async(req,res)=>{

    await Usuario.destroy({
        where:{
            id:req.params.id
        }
    });

    res.json({
        mensaje:"Usuario eliminado"
    });

}
