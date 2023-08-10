const mongoose = require('mongoose');
const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const port = 2500;
const myRouter = require("./routes/myRouter.js");
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

/*const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Conexión a MongoDB exitosa');
    })
    .catch((err) => {
        console.error('Error al conectar a MongoDB:', err);
    });*/

app.use(express.static('./', {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use('/imgs', express.static(path.join(__dirname, 'public/imgs')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", myRouter);


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});

module.exports = app;