const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "files");
const filePath = path.join(folderPath, "notes.txt");

if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log("Folder created");
}

fs.writeFileSync(filePath, "This is the first line.");
console.log("File written");

const content1 = fs.readFileSync(filePath, "utf-8");
console.log("Current content:");
console.log(content1);

fs.appendFileSync(filePath, "\nThis line was appended later.");
console.log("Content appended");

const content2 = fs.readFileSync(filePath, "utf-8");
console.log("Updated content:");
console.log(content2);