import db from "./createMySQLConnection.js";

db.query(`
    CREATE TABLE IF NOT EXISTS electronics(
        id INT PRIMARY KEY AUTO_INCREMENT,
        image varchar(200),
        name VARCHAR(50),
        price INT,
        description VARCHAR(200)
    );
`);
db.query(`
    CREATE TABLE IF NOT EXISTS accessories(
        id INT PRIMARY KEY AUTO_INCREMENT,
        image varchar(200),
        name VARCHAR(50),
        price INT,
        description VARCHAR(200)
    );
`);
db.query(`
    CREATE TABLE IF NOT EXISTS clothes(
        id INT PRIMARY KEY AUTO_INCREMENT,
        image varchar(200),
        name VARCHAR(50),
        price INT,
        description VARCHAR(200)
    );
`);
db.query(`
    CREATE TABLE IF NOT EXISTS shoes(
        id INT PRIMARY KEY AUTO_INCREMENT,
        image varchar(200),
        name VARCHAR(50),
        price INT,
        description VARCHAR(200)
    );
`);

db.query(`
    CREATE TABLE IF NOT EXISTS logins(
      id INT PRIMARY KEY AUTO_INCREMENT,
      username VARCHAR(200) NOT NULL,
      password VARCHAR(200) NOT NULL
    );
`);


db.end();