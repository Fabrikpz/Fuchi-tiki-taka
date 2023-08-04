const Jugador = require('../models/myModel');

exports.juego = (req, res) => {
    const topTeams = ['Manchester United', 'Manchester City', 'PSG'];
    const leftTeams = ['Real Madrid', 'Bayern', 'Liverpool'];
    const players = [
        'Di Maria', 'Robinho', 'Navas', 'Schweinsteiger',
        'Cancelo', 'Coman', 'Owen', 'Sterling', 'Wijnaldum'];

    res.render('panel', { topTeams, leftTeams, players });
};

exports.crearjugador = async (req, res) => {
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
        { "nombre": "Rodrigo", "apellido": "Goes", "pais": "Brasil", "club": "Real Madrid" }
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
