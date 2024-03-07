const mysql = require("mysql");

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "emp_data"
})

conn.connect((err) => {
    if (err) throw err;
    console.log("Connected to Database!");
    let sql = `CREATE TABLE EMP_SAL(
        emp_id int,
        emp_name text,
        emp_salary int,
        PRIMARY KEY(emp_id)
    )`;

    conn.query(sql, (err, data) => {
        if (err) throw err;
        console.log("Table with name EMP_SAL created successfully");
    });
});