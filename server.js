const mongoose = require('mongoose');
const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const port = 2500;
const myRouter = require("./routes/myRouter.js");

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


dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
    })
    .then((con) => {
        //console.log(con.connections);
        console.log("Connected to database");
    });

app.use("/", myRouter);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});

module.exports = app;
