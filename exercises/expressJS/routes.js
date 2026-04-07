const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
    res.send("Hello from Express");
});

router.get("/user/:name", (req, res) => {
    res.send("User: " + req.params.name);
});

router.get("/search", (req, res) => {
    res.send("Query: " + req.query.q);
});

module.exports = router;