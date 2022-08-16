// MySql
const mysql = require('mysql');
const conexionsql = mysql.createConnection({
  host: process.env.MYSQLHST,
  port: process.env.MYSQLPRT,
  user: process.env.MYSQLUSR,
  password: process.env.MYSQLPW,
  database: process.env.MYSQLDB
});

module.exports = conexionsql