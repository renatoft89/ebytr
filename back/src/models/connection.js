const mysql = require('mysql2/promise');

require('dotenv').config(); // não se esqueça de configurar suas variáveis de ambiente aqui na configuração

const connection = mysql.createPool({
  host: process.env.MYSQLHOST || 'containers-us-west-136.railway.app',
  user: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || 'bttQerUf4C4jVtoDvaMg',
  database: process.env.MYSQLDATABASE || 'railway',
  port: process.env.MYSQLPORT || '6155',
});

module.exports = connection;
