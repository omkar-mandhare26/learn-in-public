import http from "http"
const PORT = 3000;

http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    if (req.url == '/') res.write("Welcome to Home Page");
    res.end();
}).listen(PORT, () => {
    console.log(`Server Running at Port ${PORT}`);
});