// Using Node.js create a web page to read two file names from user and combine in third file with all content in Upper case.

import http from "http";
import fs from "fs";
import url from "url";

const PORT = 3000;
const indexFile = "./index.html";

http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(fs.readFileSync(indexFile));
    if (req.url != "/favicon.ico") {
        let args = url.parse(req.url, true).query;
        let fileData = `${fs.readFileSync(args.fileName1)} ${fs.readFileSync(args.fileName2)}`.toUpperCase();
        fs.writeFileSync("./file3.txt", fileData);
        console.log(fileData);
    }
    res.end();
}).listen(PORT, () => { console.log(`Server Running at Port ${PORT}`); });