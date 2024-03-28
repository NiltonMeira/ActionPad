// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');

// Criando a tabela Sala
const elementos = database.define('Elementos', {
    IDElemento: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
    },
    Content: {
    type: Sequelize.STRING(50),
    allowNull: false
    }
});

elementos.belongsTo(paginas, {
    foreignKey: 'IDPagina'
});

elementos.belongsTo(ferramentas, {
    foreignKey: 'IDFerramentas'
});


// Exportando essa tabela
module.exports = elementos;