const fs = require("fs");
let fileName = "./sample.txt";

fs.readFile(fileName, "utf8", (err, data) => {
    if (err) throw err;

    const lines = data.split('\n').length;
    console.log(`Number of Lines in File ${fileName}: ${lines}`);
});
