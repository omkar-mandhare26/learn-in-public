import mysql from "mysql";

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "emp_data"
});

conn.connect((err) => {
    if (err) throw err;
    console.log("DB connected Successfully");

    let SQL = `UPDATE emp_sal SET emp_salary=99000 where emp_id=4148;`;
    conn.query(SQL, (err, data) => {
        if (err) throw err;
        console.log("Data Updated Successfully");
    });
});