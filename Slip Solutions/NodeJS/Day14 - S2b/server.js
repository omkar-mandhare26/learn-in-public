const http = require("http");
const fs = require("fs");
const PORT = 8000;

http.createServer((req, res) => {
    if (req.url != "/favicon.ico") {
        if (req.url == "/") {
            res.writeHead(200, { "content-type": "text/html" });
            res.write(fs.readFileSync("./index.html"));
            res.end();
        }
    }
}).listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});