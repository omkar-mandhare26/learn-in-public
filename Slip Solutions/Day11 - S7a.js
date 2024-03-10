// Using Node.js create a web page to read two file names from user and append contents of first file into second file.

import http from "http";
import url from "url";
import fs from "fs";
const PORT = 8000;

const fileName = "./index_S7a.html";
const fileData = fs.readFileSync(fileName);
const resultfileData = fs.readFileSync("./result.html");


http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(fileData);
    if (req.url != "/favicon.ico") {
        let args = url.parse(req.url, true).query;
        fs.appendFileSync(args.fileName2, fs.readFileSync(args.fileName1).toString());
    }
    res.end();
}).listen(PORT, () => {
    console.log(`Server Running At Port: ${PORT}`);
})