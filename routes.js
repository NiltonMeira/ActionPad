// Iniciando Route do Express
const express = require('express');
const route = express.Router();
// Importando os Controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');
// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.post('/cadastro', cadastro.usuarioInsert);
module.exports = route;