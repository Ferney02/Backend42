

const mongoose = require('mongoose');
require('dotenv').config();

//Funcion para realizar la conexion
const conectar = () => {
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => console.log("Conexion exitosa a MongoDb"))
        .catch((err) => console.error(err));
}


module.exports = conectar;