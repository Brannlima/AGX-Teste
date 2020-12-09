const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const url = "mongodb+srv://AGX:AGX123@cluster0.omw1e.mongodb.net/TESTE?retryWrites=true&w=majority";
const server = express();

const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados:' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados');
});

mongoose.connection.on('connected', () => {
    console.log ('Aplicação conectada com sucesso');
});

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

const EventosRoute = require('./Routes/EventosRotas');
const EventosController = require('./Controller/EventosController');

server.use('/', EventosRoute);
server.use('/eventos', EventosController);

server.listen(3000);

module.exports = server;