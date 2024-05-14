

const express = require('express');
const router = express.Router();
const controlUsuario = require('../controllers/controlUsuario');


router.post('/', controlUsuario.AgregarUsuario);
//El metodo get es para mostrar lo deseado, muestra en la 
router.get('/', controlUsuario.mostrarUsuario);
router.get('/:id', controlUsuario.mostrarUnUsuario);
router.delete('/:id', controlUsuario.eliminarUnUsuario);
router.patch('/:id', controlUsuario.modificarUsuario);


module.exports = router;