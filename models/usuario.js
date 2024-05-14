const mongoose = require('mongoose');



//El modelo a realizar debe ser igual a la base de datos.

//El Schema es de esquema
const usuarioSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    ndocumento: {
        type: Number,
        required: true
    },
    tipodesangre: {
//Probar el type email aqui, para ver si funciona y poder validarlo.
        type: String,
        required: true
    },
    epsafiliado: {
        type: String,
        required: true
    },
    numerodecontacto: {
        type: Number,
        required: true
    },
    enfermedadC: {
        type: String,
        required: true
    },
}, { versionkey: false });

module.exports = mongoose.model('Usuario', usuarioSchema)





