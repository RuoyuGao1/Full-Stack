const path = require("path");
const { URL } = require("url");

const filePath = "C:/Users/Student/Desktop/fullstack-course/exercises/nodeJS/app.js";

console.log("Base name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));
console.log("Directory name:", path.dirname(filePath));

const joinedPath = path.join("exercises", "nodeJS", "files", "example.txt");
console.log("Joined path:", joinedPath);

const myUrl = new URL("http://localhost:3000/search?q=nodejs&level=basic");

console.log("Host:", myUrl.host);
console.log("Pathname:", myUrl.pathname);
console.log("Search params q:", myUrl.searchParams.get("q"));
console.log("Search params level:", myUrl.searchParams.get("level"));