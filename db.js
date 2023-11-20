"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mariadb = require("mariadb");
const database = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'banco_senac',
    connectionLimit: '5',
});
exports.default = database;
database.execute(`
    CREATE TABLE IF NOT EXISTS user_info(
        id_user INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name_user VARCHAR(50) NOT NULL,
        password_user VARCHAR(50) NOT NULL,
        total_value DECIMAL(10,2) NOT NULL
    );
    `);
