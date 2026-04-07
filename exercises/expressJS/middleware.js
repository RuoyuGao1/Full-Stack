const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("Request received:", req.method, req.url);
    next();
});

app.get("/", (req, res) => {
    res.send("Middleware example");
});

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});