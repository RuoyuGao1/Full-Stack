import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Fetch Practice</h1>

      {tasks.length === 0 && <p>No tasks found</p>}

      {tasks.map((task) => (
        <p key={task.id}>{task.text}</p>
      ))}
    </div>
  );
}

export default App;
