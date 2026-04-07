const http = require("http");
const { URL } = require("url");

const server = http.createServer((req, res) => {
    const currentUrl = new URL(req.url, "http://localhost:3002");

    if (currentUrl.pathname === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home page");
    } else if (currentUrl.pathname === "/about" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About page");
    } else if (currentUrl.pathname === "/api/user" && req.method === "GET") {
        const name = currentUrl.searchParams.get("name") || "Guest";

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            message: "User data loaded",
            name: name
        }));
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

server.listen(3002, () => {
    console.log("Node server running on http://localhost:3002");
});