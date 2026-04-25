const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, text: "Learn MERN stack" },
  { id: 2, text: "Practice API routes" },
];

app.get("/", (req, res) => {
  res.send("MERN backend API practice");
});

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const newTask = {
    id: Date.now(),
    text: req.body.text,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.delete("/api/tasks/:id", (req, res) => {
  tasks = tasks.filter((task) => task.id !== Number(req.params.id));
  res.json({ message: "Task deleted" });
});

app.listen(5000, () => {
  console.log("Backend API running on http://localhost:5000");
});