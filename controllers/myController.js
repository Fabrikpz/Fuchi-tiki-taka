const Jugador = require('../models/myModel');

exports.inicio = (req, res) => {
    const topTeams = ['Manchester United', 'Manchester City', 'PSG'];
    const leftTeams = ['Real Madrid', 'Bayern', 'Liverpool'];
    const players = [
        'Di Maria', 'Robinho', 'Navas', 'Schweinsteiger',
        'Cancelo', 'Coman', 'Owen', 'Sterling', 'Wijnaldum'];

    res.render('panel', { topTeams, leftTeams, players });
};

exports.crearjugador = async (req, res) => {
    jugadoresArr = [
        { "nombre": "Lionel", "apellido": "Messi", "edad": 36, "pais": "Argentina", "club": "PSG" },
        { "nombre": "Mohamed", "apellido": "Salah", "edad": 31, "pais": "Egipto", "club": "Liverpool" }
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
