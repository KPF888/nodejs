const mysql = require('mysql');

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin666',
    database: 'my_db_1',
    port: '3306'
});

module.exports = db;