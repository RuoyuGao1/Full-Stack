const fs = require("fs");

fs.writeFileSync("test.txt", "Hello from Node.js");

const data = fs.readFileSync("test.txt", "utf-8");
console.log(data);

fs.appendFileSync("test.txt", "\nNew line added");