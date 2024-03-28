// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');
const usuarios = require('./usuarios');
const predefinicoes = require('./predefinicoes');

// Criando a tabela Páginas
const paginas = database.define('Paginas', {
    IDPagina: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
    },
    Descricao: {
    type: Sequelize.STRING(50),
    allowNull: false
    }
});

paginas.belongsTo(usuarios, {
    foreignKey: 'IDUsuario'
});

paginas.belongsTo(predefinicoes, {
    foreignKey: 'IDPredefinicoes'
});

// Exportando essa tabela
module.exports = usuarios;