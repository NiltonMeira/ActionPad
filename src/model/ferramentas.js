// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');

// Criando a tabela Sala
const ferramentas = database.define('Ferramentas', {
    IDFerramentas: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Caminho: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Descricao: {
        type: Sequelize.STRING(50),
        allowNull: false
    }

});



// Exportando essa tabela
module.exports = ferramentas;