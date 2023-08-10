const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();

// Renderiza el juego
router.route('/juego').get(myController.juego);

// Obtiene la info de los jugadores
router.route('/juego/jugadores').get(myController.obtenerJugadores);

//update
router.route("/juego/god").put(myController.actualizarJugador)

module.exports = router;

