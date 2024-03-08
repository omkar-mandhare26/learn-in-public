import mysql from "mysql";

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "emp_data"
});

conn.connect((err) => {
    if (err) throw err;
    console.log("DB Connected Successfully!");

    let SQL = "DELETE FROM customers WHERE id=1;"
    conn.query(SQL, (err, data) => {
        if (err) throw err;
        console.log("Data Deleted Successfully!");
    });
});