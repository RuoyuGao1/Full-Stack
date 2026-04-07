const express = require("express");
const app = express();

app.use(express.json());

let users = [];

// CREATE
app.post("/users", (req, res) => {
    users.push(req.body);
    res.send("User added");
});

// READ
app.get("/users", (req, res) => {
    res.json(users);
});

// UPDATE
app.put("/users/:name", (req, res) => {
    users = users.map(u => 
        u.name === req.params.name ? req.body : u
    );
    res.send("User updated");
});

// DELETE
app.delete("/users/:name", (req, res) => {
    users = users.filter(u => u.name !== req.params.name);
    res.send("User deleted");
});

app.listen(3002, () => {
    console.log("CRUD API running on http://localhost:3002");
});