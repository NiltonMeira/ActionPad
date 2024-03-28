 // Importação
const Sequelize = require('sequelize');
const database = require('../config/db');

// Criando a tabela Sala
const predefinicoes = database.define('Predefinicoes', {
    IDPredefinicoes: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Descricao: {
        type: Sequelize.STRING(50),
        allowNull: false
    }

});

predefinicoes.belongsTo(usuarios, {
    foreignKey: 'IDUsuario'
});

// Exportando essa tabela
module.exports = predefinicoes;