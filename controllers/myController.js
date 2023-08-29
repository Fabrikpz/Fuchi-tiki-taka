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
        { "nombre": "Mohamed", "apellido": "Salah", "pais": "Egipto", "club": ["Chelsea", "Roma", "Liverpool"]},
        { "nombre": "Cristiano", "apellido": "Ronaldo", "pais": "Portugal", "club": ["Manchester United", "Real Madrid", "Juventus"]},
        { "nombre": "Vinicius", "apellido": "Junior", "pais": "Brasil", "club": ["Real Madrid"]},
        { "nombre": "Robert", "apellido": "Lewandowski", "pais": "Polonia", "club": ["Borussia Dortmund", "Bayern Munich", "Barcelona"]},
        { "nombre": "Victor", "apellido": "Osimhen", "pais": "Nigeria", "club": ["Napoli"]},
        { "nombre": "Karim", "apellido": "Benzema", "pais": "Francia", "club": ["Real Madrid"]},
        { "nombre": "Marc-André", "apellido": "ter Stegen", "pais": "Alemania", "club": ["Borussia Mönchengladbach", "Barcelona"]},
        { "nombre": "Kylian", "apellido": "Mbappé", "pais": "Francia", "club": ["Monaco", "Paris Saint Germain"]},
        { "nombre": "Khvicha", "apellido": "Kvaratskhelia", "pais": "Georgia", "club": ["Napoli"]},
        { "nombre": "Rodrigo", "apellido": "Goes", "pais": "Brasil", "club": [ "Real Madrid", "Valencia"]},
        { "nombre": "Luka", "apellido": "Modric", "pais": "Croacia", "club": ["Tottenham Hotspur", "Real Madrid"]},
        { "nombre": "Eduardo", "apellido": "Camavinga", "pais": "Angola", "club": ["Real Madrid"]},
        { "nombre": "Gareth", "apellido": "Bale", "pais": "Gales", "club": ["Tottenham Hotspur", "Real Madrid"]},
        { "nombre": "Fabio", "apellido": "Cannavaro", "pais": "Italia", "club": ["Napoli", "Inter de Milan", "Juventus", "Real Madrid"]},
        { "nombre": "Diego", "apellido": "Costa", "pais": "España", "club": ["Chelsea", "Atlético Madrid"]},
        { "nombre": "Diego", "apellido": "Maradona", "pais": "Argentina", "club": ["Boca Juniors", "Barcelona", "Napoli", "Sevilla"]},
        { "nombre": "Lionel", "apellido": "Messi", "pais": "Argentina", "club": ["Barcelona", "Paris Saint Germain"]},
        { "nombre": "Zinédine", "apellido": "Zidane", "pais": "Francia", "club": [ "Juventus", "Real Madrid"]},
        { "nombre": "Ronaldo", "apellido": "Nazário", "pais": "Brasil", "club": ["PSV Eindhoven", "Barcelona", "Real Madrid", "Milan"]},
        { "nombre": "Rodrigo", "apellido": "De Paul", "pais": "Argentina", "club": ["Racing Club", "Valencia", "Atlético Madrid"]},
        { "nombre": "Nahuel", "apellido": "Molina", "pais": "Argentina", "club": [ "Boca Juniors","Atlético Madrid"]},
        { "nombre": "Emiliano", "apellido": "Martínez", "pais": "Argentina", "club": ["Independiente", "Arsenal", "Aston Villa"]},
        { "nombre": "Hugo", "apellido": "Lloris", "pais": "Francia", "club": [ "Tottenham Hotspur"]},
        { "nombre": "Alexis", "apellido": "Mac Allister", "pais": "Argentina", "club": ["Argentinos Juniors","Liverpool"]},
        { "nombre": "Arturo", "apellido": "Vidal", "pais": "Chile", "club": ["Juventus", "Bayern Munich", "Barcelona", "Inter de milan"]},
        { "nombre": "Kalidou", "apellido": "Koulibaly", "pais": "Senegal", "club": ["Napoli", "Chelsea"]},
        { "nombre": "Lautaro", "apellido": "Martínez", "pais": "Argentina", "club": ["Racing Club", "Inter de milan"]},
        { "nombre": "Alexis", "apellido": "Sánchez", "pais": "Chile", "club": ["Barcelona", "Arsenal", "Manchester United", "Inter de milan", "Olympique de Marsella"]},
        { "nombre": "Kevin", "apellido": "De Bruyne", "pais": "Bélgica", "club": ["Chelsea", "Manchester City"]},
        { "nombre": "Erling", "apellido": "Haaland", "pais": "Noruega", "club": [ "Borussia Dortmund", "Manchester City"]},
        { "nombre": "Jude", "apellido": "Bellingham", "pais": "Inglaterra", "club": ["Borussia Dortmund","Real Madrid"]},
        { "nombre": "Bernardo", "apellido": "Silva", "pais": "Portugal", "club": ["Monaco", "Manchester City"]},
        { "nombre": "Bruno", "apellido": "Fernandes", "pais": "Portugal", "club": ["Manchester United"]},
        { "nombre": "Marcus", "apellido": "Rashford", "pais": "Inglaterra", "club": ["Manchester United"]},
        { "nombre": "Harry", "apellido": "Kane", "pais": "Inglaterra", "club": ["Tottenham Hotspur", "Bayern Munich"]},
        { "nombre": "Martín", "apellido": "Palermo", "pais": "Argentina", "club": ["Boca Juniors"]},
        { "nombre": "Carlos", "apellido": "Tévez", "pais": "Argentina", "club": ["Manchester United", "Manchester City", "Juventus", "Boca Juniors"]},
        { "nombre": "Pablo", "apellido": "Aimar", "pais": "Argentina", "club": ["River Plate", "Valencia"]},
        { "nombre": "Marcelo", "apellido": "Gallardo", "pais": "Argentina", "club": ["River Plate", "Mónaco", "Paris Saint-Germain"]},
        { "nombre": "Marcelo", "apellido": "Gallardo", "pais": "Argentina", "club": ["Mónaco", "Paris Saint-Germain", "River Plate"]},
        { "nombre": "Pablo", "apellido": "Zabaleta", "pais": "Argentina", "club": ["San Lorenzo", "Manchester City"]},
        { "nombre": "Nicolás", "apellido": "Otamendi", "pais": "Argentina", "club": ["Valencia", "Manchester City"]},
        { "nombre": "Ángel", "apellido": "Di María", "pais": "Argentina", "club": ["Real Madrid", "Manchester United", "París Saint-Germain", "Juventus"]},
        { "nombre": "Enzo", "apellido": "Francescoli", "pais": "Uruguay", "club": ["River Plate","Olympique de Marsella"]},
        { "nombre": "Fernando", "apellido": "Cavenaghi", "pais": "Argentina", "club": ["River Plate"]},
        { "nombre": "Leonardo", "apellido": "Ponzio", "pais": "Argentina", "club": ["River Plate"]},
        { "nombre": "Gianluigi", "apellido": "Donnarumma", "pais": "Italia", "club": ["Milan","París Saint-Germain"]},
        { "nombre": "Neymar", "apellido": "da Silva Santos Júnior", "pais": "Brasil", "club": ["Barcelona", "París Saint-Germain"]},
        { "nombre": "Alessandro", "apellido": "Del Piero", "pais": "Italia", "club": ["Juventus"]},
        { "nombre": "Ronaldo", "apellido": "de Assis Moreira", "pais": "Brasil", "club": ["Paris Saint-Germain", "Barcelona", "Milan"]},
        { "nombre": "Paulo", "apellido": "Dybala", "pais": "Argentina", "club": ["Juventus", "Roma"]},
        { "nombre": "Alisson", "apellido": "Becker", "pais": "Brasil", "club": ["Roma", "Liverpool"]},
        { "nombre": "Claudio", "apellido": "Marchisio", "pais": "Italia", "club": ["Juventus"]},
        { "nombre": "Leon", "apellido": "Goretzka", "pais": "Alemania", "club": ["Bayern de Múnich"]},
        { "nombre": "Lucimar", "apellido": "da Silva Ferreira", "pais": "Brasil", "club": ["Bayern de Múnich", "Inter de Milán", "Juventus"]},
        { "nombre": "Thierry", "apellido": "Henry", "pais": "Francia", "club": ["Monaco", "Juventus", "Arsenal", "Barcelona"]},
        { "nombre": "Jérôme", "apellido": "Boateng", "pais": "Alemania", "club": ["Bayern de Múnich"]},
        { "nombre": "Virgil", "apellido": "van Dijk", "pais": "Países Bajos", "club": ["Liverpool"]},
        { "nombre": "Marcos", "apellido": "Alonso Mendoza", "pais": "España", "club": ["Real Madrid","Chelsea", "Barcelona"]},
        { "nombre": "Wayne", "apellido": "Rooney", "pais": "Inglaterra", "club": ["Manchester United"]},
        { "nombre": "Roberto", "apellido": "Carlos da Silva Rocha", "pais": "Brasil", "club": ["Inter de Milán", "Real Madrid"]},
        { "nombre": "Mykhailo", "apellido": "Mudryk", "pais": "Ucrania", "club": [ "Chelsea"]},
        { "nombre": "Sergio", "apellido": "Busquets Burgos", "pais": "España", "club": ["Barcelona"]},
        { "nombre": "Alessandro", "apellido": "Florenzi", "pais": "Italia", "club": ["Roma", "Valencia", "París Saint-Germain", "Milan"]},
        { "nombre": "Ibrahima", "apellido": "Konaté", "pais": "Francia", "club": ["Liverpool"]},
        { "nombre": "Julián", "apellido": "Álvarez", "pais": "Argentina", "club": ["River Plate", "Manchester City"]},
        { "nombre": "Rafael Alexandre", "apellido": "Leão", "pais": "Portugal", "club": ["Milan"]},
        { "nombre": "Jamal", "apellido": "Musiala", "pais": "Alemania", "club": ["Chelsea", "Bayern de Múnich"]},
        { "nombre": "Thiago", "apellido": "Alcántara", "pais": "España", "club": ["Barcelona", "Bayern de Múnich", "Liverpool"]},
        { "nombre": "Marcos", "apellido": "Llorente Moreno", "pais": "España", "club": ["Real Madrid","Atlético de Madrid"]},
        { "nombre": "Jan", "apellido": "Oblak", "pais": "Eslovenia", "club": ["Atlético de Madrid"]},
        { "nombre": "David", "apellido": "Alaba", "pais": "Austria", "club": ["Bayern de Múnich", "Real Madrid"]},
        { "nombre": "Gabriel Fernando", "apellido": "de Jesus", "pais": "Brasil", "club": [ "Manchester City", "Arsenal"]},
        { "nombre": "Marco", "apellido": "Reus", "pais": "Alemania", "club": ["Borussia Dortmund"]},
        { "nombre": "Mario", "apellido": "Balotelli", "pais": "Italia", "club": ["Inter de Milán", "Manchester City", "Milan", "Liverpool","Olympique de Marsella"]},
        { "nombre": "Iván", "apellido": "Córdoba", "pais": "Colombia", "club": ["San Lorenzo", "Inter de Milán"]},
        { "nombre": "David", "apellido": "Ginola", "pais": "Francia", "club": ["PSG","Tottenham Hotspur"]},
        { "nombre": "Joe", "apellido": "Cole", "pais": "Inglaterra", "club": ["Chelsea","Liverpool"]},
        { "nombre": "Ashley", "apellido": "Cole", "pais": "Inglaterra", "club": ["Arsenal", "Chelsea", "Roma"]},
        { "nombre": "Yaya", "apellido": "Touré", "pais": "Costa de Marfil", "club": ["Barcelona", "Manchester City"]},
        { "nombre": "Raphaël", "apellido": "Varane", "pais": "Francia", "club": ["Lens", "Real Madrid", "Manchester United"]},
        { "nombre": "Bastian", "apellido": "Schweinsteiger", "pais": "Alemania", "club": ["Bayern de Múnich", "Manchester United"]},
        { "nombre": "Paul", "apellido": "Pogba", "pais": "Francia", "club": ["Juventus", "Manchester United"]},
        { "nombre": "Anthony", "apellido": "Martial", "pais": "Francia", "club": ["Monaco", "Manchester United", "Sevilla"]},
        { "nombre": "Ousmane", "apellido": "Dembélé", "pais": "Francia", "club": ["Borussia Dortmund", "Barcelona"]},
        { "nombre": "Toni", "apellido": "Kroos", "pais": "Alemania", "club": ["Bayern de Múnich", "Real Madrid"]},
        { "nombre": "Ronaldo", "apellido": "Nazário", "pais": "Brasil", "club": ["Barcelona", "Inter de Milán", "Real Madrid", "Milan"]},
        { "nombre": "N'Golo", "apellido": "Kanté", "pais": "Francia", "club": ["Chelsea"]},
        { "nombre": "Rui", "apellido": "Costa", "pais": "Portugal", "club": ["Milan"]},
        { "nombre": "Andriy", "apellido": "Shevchenko", "pais": "Ucrania", "club": ["Milan", "Chelsea"]},
        { "nombre": "Leroy", "apellido": "Sané", "pais": "Alemania", "club": ["Manchester City", "Bayern de Múnich"]},
        { "nombre": "Frederico", "apellido": "Rodrigues", "pais": "Brasil", "club": ["Manchester United"]},
        { "nombre": "Jack", "apellido": "Grealish", "pais": "Inglaterra", "club": ["Manchester City"]},
        { "nombre": "Federico", "apellido": "Chiesa", "pais": "Italia", "club": ["Juventus"]}
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