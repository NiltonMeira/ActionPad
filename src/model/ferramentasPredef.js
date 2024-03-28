// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');
const predefinicoes = require('./predefinicoes');
const ferramentas = require('./ferramentas');

// Criando a tabela Sala
const ferramentasPredef = database.define('FerramentasPredef', {
    IDFerramentasPredef: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

ferramentasPredef.belongsTo(predefinicoes, {
    foreignKey: 'IDPredefinicao'
});

ferramentasPredef.belongsTo(ferramentas, {
    foreignKey: 'IDFerramenta'
});

// Exportando essa tabela
module.exports = ferramentasPredef;