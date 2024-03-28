// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');

// Criando a tabela Sala
const usuarios = database.define('Usuarios', {
    IDUsuario: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
    },
    Nome: {
    type: Sequelize.STRING(50),
    allowNull: false
    },
    Email: {
    type: Sequelize.STRING(50),
    allowNull: false
    },
    Senha: {
    type: Sequelize.STRING(50),
    allowNull: false
    }
});

// Exportando essa tabela
module.exports = usuarios;