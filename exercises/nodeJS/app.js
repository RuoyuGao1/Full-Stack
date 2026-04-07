const os = require("os");

console.log("Node.js practice started");
console.log("Platform:", os.platform());
console.log("CPU cores:", os.cpus().length);
console.log("Home directory:", os.homedir());