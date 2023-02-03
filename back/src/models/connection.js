const mysql = require('mysql2/promise');

require('dotenv').config(); // não se esqueça de configurar suas variáveis de ambiente aqui na configuração

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST || 'containers-us-west-136.railway.app',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'bttQerUf4C4jVtoDvaMg',
  database: process.env.MYSQL_DATABASE || 'railway',
  port: process.env.MYSQL_PORT || '6155',
});

module.exports = connection;
