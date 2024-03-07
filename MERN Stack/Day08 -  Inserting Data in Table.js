const prompt = require("prompt-sync")();
const mysql = require("mysql");

let conn = mysql.createConnection({
    host: "localhost",
    database: "emp_data",
    user: "root",
    password: "mysql"
});

conn.connect((err) => {
    if (err) console.log(err);
    console.log("Connected to DB Successfully!");
    const empId = prompt("Enter Employee ID: ");
    const empName = prompt("Enter Employee Name: ");
    const empSalary = prompt("Enter Employee Salary: ");

    let sql = `INSERT INTO EMP_SAL(emp_id,emp_name,emp_salary) VALUES(${empId},"${empName}",${empSalary});`

    conn.query(sql, (err, data) => {
        if (err) console.log(err);
        console.log("1 Record Successfully inserted in the table");
    });
});