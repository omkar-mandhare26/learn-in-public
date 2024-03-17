const http = require("http");
const fs = require("fs");
const PORT = 8000;
const fileName = "college_info.json";

const displayInfo = (res, data) => {
    let contentData = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>College Info</title>
    </head>
    
    <body>
        <h1>College Information</h1>
        <h3>${data.Name}</h3>
        <h5>Location: ${data.location}</h5>
        <p>${data.Description}</p>
        <a href="${data.Website}">Website: ${data.Website}</a><br>
        <p>Programs Offered</p>
        <ul type="circle">
        <li>${data.Programs[0]}</li>
        <li>${data.Programs[1]}</li>
        <li>${data.Programs[2]}</li>
        <li>${data.Programs[3]}</li>
        <li>${data.Programs[4]}</li>
        </ul>
    </body>
    </html>`;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(contentData);
    res.end();
}

http.createServer((req, res) => {
    if (req.url == "/favicon.ico") res.end();
    if (req.url == "/") {
        let jsonData = JSON.parse(fs.readFileSync(fileName));
        displayInfo(res, jsonData);
    }
}).listen(PORT, () => { console.log(`Server Running on Port ${PORT}`); });