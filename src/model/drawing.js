const Sequelize = require('sequelize');
const database = require('../config/db');

const drawing = database.define('Draws', {
    IDDraw: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
    },
    IDUsuario: {
    type: Sequelize.INTEGER 
    },
    Data: {
    type: Sequelize.TEXT
    }
});

module.exports = drawing;