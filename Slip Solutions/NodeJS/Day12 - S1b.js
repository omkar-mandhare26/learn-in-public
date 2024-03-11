import mysql from "mysql";

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

function createTable() {
    let query = "CREATE TABLE IF NOT EXISTS students(rno int,sname text,percentage float,PRIMARY KEY(rno));"
    conn.query(query, (err, data) => {
        if (err) throw err;
    });
}

function insertData() {
    let rollNo = [1, 2, 3, 4, 5];
    let studentName = ["Omkar", "Aarush", "Om", "Aaru", "Martin"];
    let per = [97.74, 90.45, 89.87, 80.80, 99.99];
    let values = [];

    for (let i = 0; i < rollNo.length; i++) {
        values.push([rollNo[i], studentName[i], per[i]]);
    }

    let query = "INSERT INTO students (rno, sname, percentage) VALUES ?";

    conn.query(query, [values], (err, data) => {
        if (err) throw err;
        console.log(`Data Inserted Successfully!`);
    });
}


function readTable() {
    let sql = "SELECT * FROM students;"
    conn.query(sql, (err, data) => {
        if (err) throw err;
        console.log(`student Table Data: `);
        console.log(data);
    })
}

// createTable();
// insertData();
readTable();


conn.end((err) => {
    if (err) throw err;
    console.log(`Connection Ended`);
})