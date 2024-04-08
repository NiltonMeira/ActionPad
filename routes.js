// Iniciando Route do Express
const express = require('express');
const route = express.Router();
// Importando os Controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');
const login = require('./src/controllers/login');


// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.post('/cadastro', cadastro.usuarioInsert);

route.get('/login', home.loginGet);
route.post('/login', login.checkLogin);

route.get('/page_select', home.pageSelectGet);

route.get('/new_page', home.newPageGet)

route.get('/page', home.pageGet)

module.exports = route;