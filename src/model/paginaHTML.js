// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');
const usuarios = require('./usuarios');
const paginas = require('./paginas');

const paginaHTML = database.define('paginaHTML', {
    IDPaginaHTML: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    HTMLContent: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    IDPagina: {
        type: Sequelize.INTEGER
    },
    IDUsuario: {
        type: Sequelize.INTEGER
    }
});


module.exports = paginaHTML;