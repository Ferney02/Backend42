//Exportar modelo clientes

const Usuario = require('../models/usuario');


//La funcion para agregar un cliente
exports.AgregarUsuario = async (req, res) => {

    try {

        let Usuarios = new Usuario(req.body)
        await Usuarios.save();
        res.send(Usuarios);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar al usuario')
    }
}


//Funcion para mostrar cliente
exports.mostrarUsuario = async (req, res) => {

    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar el usuario')
    }
}



//Mostrar el cliente

exports.mostrarUnUsuario = async (req, res) => {
    try {
        let usuarios = await Usuario.findById(req.params.id);

        if (!usuarios) {
            res.status(404).json({ msg: "No se encuentra ese usario con ese ID" });
        }

        res.send(usuarios);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar el usuario en la basde de datos');
    }
}



//funcion para eliminar
exports.eliminarUnUsuario = async (req, res) => {
    try {
        //Aqui busca el id buscado
        let usuarios = await Usuario.findById(req.params.id);

        //Verifica si no existe y si es el caso muestra el mensaje
        if (!usuarios) {
            res.status(404).json({ msg: "El usuario con ese ID no existe" });
            return
        }

        await Usuario.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "El usuario fue eliminado" });

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el usuario en la base de datos');
    }
}



//Modificar un cliente
exports.modificarUsuario = async (req, res) => {
    try {
        let usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!usuario) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.json(usuario)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar el usuario');
    }
}
