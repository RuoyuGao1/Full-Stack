const express = require("express");
const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Express server is running");
});

// About route
app.get("/about", (req, res) => {
    res.send("About page");
});

// Dynamic route
app.get("/user/:name", (req, res) => {
    res.send("User: " + req.params.name);
});

// Query route
app.get("/search", (req, res) => {
    res.send("Query: " + req.query.q);
});

// 404 handler
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

// Start server (改成3001)
app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});