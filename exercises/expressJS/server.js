const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const usersRouter = require("./routes/users");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

app.use(express.static(path.join(__dirname, "public")));

app.get("/about", (req, res) => {
    res.send("About page");
});

app.use("/api/users", usersRouter);

app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});