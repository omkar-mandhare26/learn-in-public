import http from "http";
import fs from "fs";
const PORT = 8000;
const indexFile = "./index.html";

http.createServer((req, res) => {
    if (req.url != '/favicon.ico') {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(fs.readFileSync(indexFile));
    }
    res.end();
}).listen(PORT, () => { console.log(`Server Runnning at Port ${PORT}`); })