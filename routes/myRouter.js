const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();

router.route('/juego').get(myController.inicio);
router.route("7juego/jugadores").post(myController.crearjugador);

module.exports = router;