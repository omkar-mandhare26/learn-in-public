const mysql = require("mysql");

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
});

conn.connect((err) => {
    if (err) throw err;
    console.log(`Connected to MySQL Successfully!`);

    let sql = `CREATE DATABASE hospital;`;
    conn.query(sql, (err, data) => {
        if (err) throw err;
        console.log(`hospital DB Created Successfully!`);
    });

    conn.query(`USE hospital`, (err, data) => {
        if (err) throw err;
        console.log(`Connected to hospital DB Successfully!`);
    });

    sql = `CREATE TABLE hosp(h_reg int,h_name text,address text,contact int,PRIMARY KEY(h_reg));`;
    conn.query(sql, (err, data) => {
        if (err) throw err;
        console.log(`hosp Table Created Successfully!`);
    });

    conn.end((err) => {
        if (err) throw err;
        console.log(`Connection Ended Successfully!`);
    })
});