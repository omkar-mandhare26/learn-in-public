import http from "http";
import url from "url";

const PORT = 8000;

http.createServer((req, res) => {
    if (req.url != '/favicon.ico') {
        console.log(req.url);
        let args = url.parse(req.url, true).query;
        console.log(args);
        console.log(`Name: ${args.name}`);
        console.log(`Age: ${args.age}`);
    }
    res.end();
}).listen(PORT, () => { console.log(`Server Runnning at Port ${PORT}`); })