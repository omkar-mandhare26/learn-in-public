const http = require("http");
const url = require("url");
const fs = require("fs");
const mysql = require("mysql");
const PORT = 8000;
const indexFile = "./index.html";
const changePWFile = "./pwreset.html";

http.createServer((req, res) => {
    const _url = url.parse(req.url).pathname;
    switch (_url) {
        case "/favicon.ico":
            res.end();
            break;

        case "/":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(fs.readFileSync(indexFile));
            res.end();
            break;

        case "/pwreset":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(fs.readFileSync(changePWFile));
            res.end();
            break;

        case "/result":
            res.writeHead(200, { "Content-Type": "text/html" });
            let args = url.parse(req.url, true).query;
            console.log(args);
            changePW(res, args);
            // res.end();
            break;

        default:
            res.end();
            break;
    }
}).listen(PORT, () => { console.log(`Server Running on Port ${PORT}`); });

const changePW = (res, args) => {
    let username = args.username;
    let newpw = args.newpw;
    console.log(username);
    console.log(newpw);

    let conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "mysql",
        database: "user_login_system"
    });

    conn.connect((err) => {
        if (err) throw err;
        console.log(`Connected To DB Successfully!`);
        let sql = `UPDATE user SET user_pw="${newpw}" WHERE user_ID="${username}";`;
        conn.query(sql, (err, data) => {
            if (err) throw err;
            console.log(`PW Changed Successfully!`);
            res.write("PW Changed Successfully!");
            res.end();
        });
    });
}