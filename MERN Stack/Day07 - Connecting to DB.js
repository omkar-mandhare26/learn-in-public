const mysql = require("mysql");

let conn = mysql.createConnection({
    host: "localhost",
    database: "emp_data",
    user: "root",
    password: "mysql"
})

conn.connect((err) => {
    if (err) throw err;
    console.log("DB Connected!");
});