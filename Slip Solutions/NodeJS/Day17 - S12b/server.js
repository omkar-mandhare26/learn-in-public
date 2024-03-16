const http = require("http");
const fs = require("fs");
const mysql = require("mysql");
const PORT = 8000;
const indexFile = "./index.html";
const loginFile = "./login.html";

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "user_login_system"
});

const getData = (res, args) => {
    let sql = `
    SELECT * FROM user WHERE user_ID = "${args.userID}" AND user_pw="${args.password}";`;
    conn.query(sql, (err, data) => {
        if (err) throw err;

        let alertMessage = '';
        if (data.length > 0) alertMessage = 'Log In Successful!';
        else alertMessage = 'Invalid User ID or Password!';

        const alert = `<script>alert('${alertMessage}');</script>`;
        res.end(alert);
    });
}

const getArguements = (req, callback) => {
    if (req.method == "POST") {
        let data = '';

        req.on('data', (chunk) => {
            data += chunk;
        });

        req.on('end', () => {
            const args = {};
            let temp = data.split('&');
            for (const t of temp) {
                const [key, value] = t.split('=');
                args[key] = value;
            }
            callback(args);
        });
    }
}

http.createServer((req, res) => {
    if (req.url == '/favicon.ico') res.end();
    if (req.url == '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(fs.readFileSync(indexFile));
        res.end();
    }
    if (req.url == '/login') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(fs.readFileSync(loginFile));

        getArguements(req, (args) => {
            getData(res, args);
        });
    }
}).listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});