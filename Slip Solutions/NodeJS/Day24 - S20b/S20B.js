const http = require("http");
const fs = require("fs");
const html = require("./create_html");
const course = "./BBA(CA)_Course.json";
const PORT = 8000;

let data = JSON.parse(fs.readFileSync(course));
let tableData = `<table border=1 style="width: 75%; text-align:center;">`;
let year = ["FY", "SY", "TY"];
let semesters = [];

for (let i = 0; i < 3; i++)
    semesters.push(Object.keys(data[year[i]]));

for (let i = 0; i < year.length; i++) {
    tableData += `
    <tr>
        <th colspan=2>${year[i]}</th>
    </tr>`;
    for (let s = 0; s <= 1; s++) {
        tableData += `
        <tr>
            <th colspan=2>${semesters[i][s]}</th>
        </tr>
        <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
        </tr>`;
        const semesterData = data[year[i]][semesters[i][s]];
        for (const code in semesterData) {
            tableData += `
            <tr>
                <td>${code}</td>
                <td>${semesterData[code]}</td>
            </tr> `;
        }
    }
}
tableData += `</table>`;

http.createServer((req, res) => {
    if (req.url == "/favicon.ico") res.end();
    if (req.url == "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(html.createHTML(tableData));
        res.end();
    }
}).listen(PORT, () => { console.log(`Server Running on Port ${PORT}`); });
