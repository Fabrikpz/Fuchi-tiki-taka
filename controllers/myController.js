const Jugador = require('../models/jugadores');
const Club = require('../models/clubes');

exports.juego = (req, res) => {
    const topTeams = ['Manchester United', 'Manchester City', 'PSG'];
    const leftTeams = ['Real Madrid', 'Bayern', 'Liverpool'];
    const players = [
        'Di Maria', 'Robinho', 'Navas', 'Schweinsteiger',
        'Cancelo', 'Coman', 'Owen', 'Sterling', 'Wijnaldum'];

    res.render('panel', { topTeams, leftTeams, players });
};

exports.crearjugadores = async (req, res) => {
    jugadoresArr = [
        { "nombre": "Lionel", "apellido": "Messi", "pais": "Argentina", "club": "Inter de miami" },
        { "nombre": "Mohamed", "apellido": "Salah", "pais": "Egipto", "club": "Liverpool" },
        { "nombre": "Cristano", "apellido": "Ronaldo", "pais": "Portugal", "club": "Al Nasrr" },
        { "nombre": "Killian", "apellido": "Mbappe", "pais": "Brasil", "club": "PSG" },
        { "nombre": "Vinicius", "apellido": "Júnior ", "pais": "Brasil", "club": "Real Madrid" },
        { "nombre": "Robert", "apellido": "Lewandowski", "pais": "Polonia", "club": "Barcelona" },
        { "nombre": "Victor", "apellido": "Osimhen", "pais": "Nigeria", "club": "Napoli" },
        { "nombre": "Karim", "apellido": "Benzema", "pais": "Francia", "club": "Real Madrid" },
        { "nombre": "Marc-André", "apellido": "ter Stegen", "pais": "Alemania", "club": "Barcelona" },
        { "nombre": "Khvicha", "apellido": "Kvaratskhelia", "pais": "Georgia", "club": "Napoli" },
        { "nombre": "Rodrigo", "apellido": "Goes", "pais": "Brasil", "club": "Real Madrid" },
    ];

    try {

        for (const jugadorObj of jugadoresArr) {
            const jugador = new Jugador(jugadorObj);
            await jugador.save();
        }
        console.log('jugadores guardados');
        res.status(200).json({ message: 'jugadores guardados' });
    } catch (error) {
        console.error('error al guardar players', error);
        res.status(500).json({ error: 'error al guardar players' });
    }
};


exports.obtenerJugadores = async (req, res) => {
    try {
        const jugadores = await Jugador.find();
        res.json(jugadores);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err });
    }
}


const updatedData =
{
    apellido: "Ter Stegen"
}

const playerId = "64cc49846667a05c18f2eb5d"

exports.actualizarJugador = async (req, res) => {
    try {
        const updatedPlayer = await Jugador.findByIdAndUpdate(playerId, updatedData, { new: true }).lean();

        if (!updatedPlayer) {
            return res.status(404).json({ error: 'Item not found' });
        }

        return res.json(updatedPlayer);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};

exports.eliminarJugador = async (req, res) => {
    const jugadorId = "64cc49836667a05c18f2eb55"; 

    try {
        const jugadorEliminado = await Jugador.findByIdAndDelete(jugadorId);

        if (jugadorEliminado) {
            res.json({ message: 'Jugador eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Jugador no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar jugador', error);
        res.status(500).json({ error: 'Error al eliminar jugador' });
    }
};