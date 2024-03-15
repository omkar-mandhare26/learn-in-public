const http = require("http");
const fs = require("fs");
const url = require("url");
const PORT = 8000;
const indexFile = "./index.html";

http.createServer((req, res) => {
    if (req.url != "/favicon.ico") {
        if (req.url == "/") {
            fs.readFile(indexFile, (err, data) => {
                if (err) {
                    res.writeHead(500, { "content-type": "text/html" });
                    res.write("500 Internal Server Error");
                    return res.end();
                }
                res.writeHead(200, { "content-type": "text/html" });
                res.write(data);
                res.end();
            });
        } else if (req.url.startsWith('/filecontent')) {
            let args = url.parse(req.url, true).query;
            if (args.fileName) {
                fs.readFile(args.fileName, (err, data) => {
                    if (err) {
                        res.writeHead(404, { "content-type": "text/html" });
                        res.write("404 Error: File Not Found");
                        return res.end();
                    }
                    res.writeHead(200, { "content-type": "text/html" });
                    res.write(data);
                    res.end();
                });
            } else {
                res.writeHead(400, { "content-type": "text/html" });
                res.write("400 Bad Request: Missing fileName parameter");
                res.end();
            }
        } else {
            res.writeHead(404, { "content-type": "text/html" });
            res.write("404 Error: Page Not Found");
            res.end();
        }
    }
}).listen(PORT, () => { console.log(`Server Running at Port ${PORT}`); });
