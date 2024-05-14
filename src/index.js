//Para usar conexiones, inicializacion y etc, hay que llamar primero y conectar con la base y ahi si usar los app. , los cors, etc
//Para arrancar el proyecto en consola hay que limpiar en dado caso y luego poner "npm run start", asi arrancas el proyecto
//Para usar el npm hay que poner las sentencias anteriores "express, notenv, etc"
const conectar = require('../config/db');
const express = require('express');
//Al conectar con el requiere, no ponemos .js o el archivo que sea, el entra directo al archivo así.
const cors = require('cors');
const app = express();
//enlazar conexion con base de datos
conectar();
app.use(cors());

//conexion con express y puerto

const port = process.env.PORT || 5000;
app.use(express.json());

//Aqui conecta la rutas
app.use('/Api/Clientes', require('../routers/RoutesCliente'));
app.use('/Api/usuario', require('../routers/RoutesUsuario'));


app.listen(port, () => console.log('Conecto al servidor '));


app.get('/', (req, res) => {
    res.send("Bienvenido al servidor");
});