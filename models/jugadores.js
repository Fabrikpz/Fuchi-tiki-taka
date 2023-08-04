const mongoose = require("mongoose");

const jugadorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    pais: {
        type: String,
        required: true,
    },
    club: {
        type: String,
        required: true,
    },
});



const Jugador = mongoose.model("Jugador", jugadorSchema);


module.exports = Jugador;
