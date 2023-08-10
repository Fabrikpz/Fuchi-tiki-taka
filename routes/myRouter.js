const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();

// Renderiza el juego
router.route('/juego').get(myController.juego);

// Obtiene la info de los jugadores
router.route('/juego/jugadores').get(myController.obtenerJugadores);

//Crear jugadores en la db
router.route("/juego/crearjugadores").post(myController.crearjugadores);

//Actualizar jugadores
router.route("/juego/actualizar").put(myController.actualizarJugador);

//Eliminar algode la db
router.route("/juego/eliminar").delete(myController.eliminarJugador);

module.exports = router;