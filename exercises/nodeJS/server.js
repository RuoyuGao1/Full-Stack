const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Home page");
  } else if (req.url === "/about") {
    res.write("About page");
  } else {
    res.write("404 Not Found");
  }
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});