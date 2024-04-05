const sequelize = require('sequelize');

//configurações da base de dados
const database = new sequelize('db_projetox', 'master', '1234',
{
dialect: 'mssql', host:'localhost', port: 55537
});
database.sync();
module.exports = database;