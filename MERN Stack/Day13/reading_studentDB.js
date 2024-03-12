const mysql = require("mysql");
const fs = require("fs");
const fileName = "./studentData.json";

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "student_db"
});

conn.connect((err) => {
    if (err) throw err;
    console.log(`Connected to Database Successfully`);
});

function readTable() {
    let sql = "SELECT * FROM students;"
    conn.query(sql, (err, data) => {
        if (err) throw err;
        let jsonData = JSON.stringify(data, null, 2);
        fs.writeFile(fileName, jsonData, 'utf8', (err) => {
            if (err) throw err;
            console.log('JSON file has been saved:', fileName);
        });
    });
}

readTable();

conn.end((err) => {
    if (err) throw err;
    console.log(`Connection Ended`);
});