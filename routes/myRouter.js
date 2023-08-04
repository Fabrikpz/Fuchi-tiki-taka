const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();

//Renderiza el juego
router.route('/juego').get(myController.juego);

//Crea nuevos jugadores en la DB
router.route("/juego/crearjugadores").post(myController.crearjugador);

//Obtiene la info de los jugadores
router.get("/juego/jugadores", myController.obtenerJugadores);

module.exports = router;