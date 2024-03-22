const http = require("http");
const fs = require("fs");
const mysql = require("mysql");
const html = require("./create_html");
const indexFile = "./index.html";
const PORT = 8000;

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "customer"
});

conn.connect((err) => {
    if (err) throw err;
    console.log(`Connected to DB Successfully!`);

    let sql = "SELECT * FROM customers;";
    conn.query(sql, (err, data) => {
        if (err) throw err;
        let tableData = `<table border=1>
        <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Customer Location</th>
            <th>Customer Total Purchase</th>
        </tr>`;
        for (let i = 0; i < data.length; i++) {
            tableData += `
            <tr>
                <td>${data[i]["c_id"]}</td>
                <td>${data[i]["c_name"]}</td>
                <td>${data[i]["c_location"]}</td>
                <td>${data[i]["purchase_total"]}</td>
            </tr>`;
        }
        tableData += `</table>`;
        fs.writeFileSync(indexFile, html.createHTML(tableData));
        http.createServer((req, res) => {
            if (req.url == 'favicon.ico') res.end();
            if (req.url == '/') {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(fs.readFileSync(indexFile));
                res.end();
            }
        }).listen(PORT, () => {
            console.log(`Server Running on Port ${PORT}`);
        });
    });

    conn.end((err) => {
        if (err) throw err;
        console.log(`Connection Ended Successfully!`);
    });
});