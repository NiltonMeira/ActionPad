// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');

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


// Exportando essa tabela
module.exports = paginas;