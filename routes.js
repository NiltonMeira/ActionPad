// Iniciando Route do Express
const express = require('express');
const route = express.Router();
// Importando os Controllers
const predef = require('./src/controllers/predef');
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');
// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.get('/predCreate', predef.ferramentasGet);
route.post('/cadastro', cadastro.usuarioInsert);
module.exports = route;