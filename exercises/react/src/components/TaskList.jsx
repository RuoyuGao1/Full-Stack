import { useEffect, useState } from "react";
import AddTaskForm from "./AddTaskForm";

function TaskList() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [
      { id: 1, text: "Learn React", reminder: true },
      { id: 2, text: "Build a project", reminder: false },
      { id: 3, text: "Practice components", reminder: true },
    ];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      reminder: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, reminder: !task.reminder }
          : task
      )
    );
  };

  return (
    <div>
      <AddTaskForm onAdd={addTask} />

      {tasks.length === 0 && <p>No tasks to show</p>}

      {tasks.map((task) => (
        <div
          key={task.id}
          className={task.reminder ? "task reminder" : "task"}
        >
          <p onDoubleClick={() => toggleReminder(task.id)}>
            {task.text}
          </p>

          <button onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;