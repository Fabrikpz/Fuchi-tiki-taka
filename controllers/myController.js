const OneModel = require('../models/myModel');

exports.inicio = (req, res) => {
    const topTeams = ['Manester City', 'Manchester City', 'PSG'];
    const leftTeams = ['Real Vardrid', 'Bayern', 'Milan'];
    const players = [
        'Jugador 1', 'Jugador 2', 'Jugador 3', 'Jugador 4',
        'Jugador 5', 'Jugador 6', 'Jugador 7', 'Jugador8', 'Jugador9'];

    res.render('panel', { topTeams, leftTeams, players});
};
