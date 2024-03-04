import fs from "fs";
let fileName = "./sample.txt";

let Newdata = `This is text to append in file ${fileName}`;

fs.appendFileSync(fileName, Newdata);

console.log(`File data after appending: ${fs.readFileSync(fileName)}`);