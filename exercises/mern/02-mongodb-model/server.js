const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/mern_practice")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const taskSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

app.get("/", (req, res) => {
  res.send("MongoDB model practice API");
});

app.get("/api/tasks", async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
});

app.post("/api/tasks", async (req, res) => {
  const task = await Task.create({
    text: req.body.text,
  });

  res.status(201).json(task);
});

app.delete("/api/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ id: req.params.id });
});

app.listen(5001, () => {
  console.log("MongoDB model practice running on http://localhost:5001");
});