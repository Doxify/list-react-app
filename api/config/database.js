const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 50,
    debug: false,
    port: 3306
});

const promisePool = pool.promise();

module.exports = promisePool;