import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

 useEffect(() => {
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5002/api/tasks");
    const data = await res.json();
    setTasks(data);
  };

  fetchTasks();
}, []);

  const addTask = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }

    const res = await fetch("http://localhost:5002/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const newTask = await res.json();
    setTasks([newTask, ...tasks]);
    setText("");
  };

  const toggleTask = async (task) => {
    const res = await fetch(`http://localhost:5002/api/tasks/${task._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !task.completed }),
    });

    const updatedTask = await res.json();

    setTasks(
      tasks.map((item) =>
        item._id === updatedTask._id ? updatedTask : item
      )
    );
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5002/api/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="container">
      <h1>MERN Integration Practice</h1>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {tasks.length === 0 && <p>No tasks found</p>}

      {tasks.map((task) => (
        <div className="task" key={task._id}>
          <p
            onDoubleClick={() => toggleTask(task)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {task.text}
          </p>

          <button onClick={() => deleteTask(task._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;