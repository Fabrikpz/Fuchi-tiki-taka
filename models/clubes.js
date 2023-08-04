const mongoose = require("mongoose");

const clubschema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    }
})

const Club = mongoose.model("Club", clubschema);

module.exports = Club;