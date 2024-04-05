const Sequelize = require('sequelize');
const database = require('../config/db');
const usuarios = require('./usuarios');
const text = require('../controllers/text');

// Criando a tabela Sala
const texto = database.define('Texto', {
    Content: {
    type: Sequelize.STRING(10000000),
    allowNull: false
    }  
});

texto.belongsTo(usuarios, {
    foreignKey: 'IDUsuario'
});
// Exportando essa tabela
module.exports = texto;


