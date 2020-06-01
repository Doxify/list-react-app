const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'lists',
    connectionLimit: 50,
    debug: false
});

const promisePool = pool.promise();

module.exports = promisePool;