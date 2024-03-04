import fs from "fs";

let data = "Sample text to create a txt file";
fs.writeFileSync("./sample.txt", data);
