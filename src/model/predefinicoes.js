 // Importação
const Sequelize = require('sequelize');
const database = require('../config/db');
const usuarios = require('./usuarios');

// Criando a tabela Sala
const predefinicoes = database.define('Predefinicoes', {
    IDPredefinicoes: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

predefinicoes.belongsTo(usuarios, {
    foreignKey: 'IDUsuario'
});

// Exportando essa tabela
module.exports = predefinicoes;