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
    }
});

paginaHTML.belongsTo(usuarios, {
    foreignKey: 'IDUsuario'
});

paginaHTML.belongsTo(paginas, {
    foreignKey: "IDPagina"
});

module.exports = paginaHTML;