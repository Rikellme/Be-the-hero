const knex = require('knex');
const configuration = require('../../knexfile');

//Configurando a conexão, que no caso é a development
const connection = knex(configuration.development);

//Exportando para outro arquivo
module.exports = connection;