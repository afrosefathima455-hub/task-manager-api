console.log("HOME FILE LOADED");
import { useState } from "react";
import AddTask from "../components/AddTask";

function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  return (
    <div>
      <h1>Task Manager</h1>

      <AddTask onAdd={addTask} />

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;