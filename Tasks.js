import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../services/api";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const loadTasks = () => {
    setLoading(true);
    getTasks()
      .then(data => {
        setTasks(Array.isArray(data) ? data : []);
        setError("");
      })
      .catch(() => setError("Failed to load tasks."))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      await createTask({ title });
      setTitle("");
      loadTasks();
    } catch {
      setError("Failed to create task.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      loadTasks();
    } catch {
      setError("Failed to delete task.");
    }
  };

  const startEdit = (task) => {
    setEditingId(task._id);
    setEditTitle(task.title);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateTask(editingId, { title: editTitle });
      setEditingId(null);
      setEditTitle("");
      loadTasks();
    } catch {
      setError("Failed to update task.");
    }
  };

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tasks</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleCreate} style={{ marginBottom: "20px" }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task title"
          style={{ padding: "8px", width: "250px" }}
        />
        <button type="submit" style={{ marginLeft: "8px" }}>Add Task</button>
      </form>

      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} style={{ border: "1px solid #ccc", margin: "8px 0", padding: "8px" }}>
            {editingId === task._id ? (
              <form onSubmit={handleUpdate}>
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  style={{ padding: "6px" }}
                />
                <button type="submit" style={{ marginLeft: "8px" }}>Save</button>
                <button type="button" onClick={() => setEditingId(null)} style={{ marginLeft: "8px" }}>
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <h4 style={{ display: "inline" }}>{task.title}</h4>
                <button onClick={() => startEdit(task)} style={{ marginLeft: "12px" }}>Edit</button>
                <button onClick={() => handleDelete(task._id)} style={{ marginLeft: "8px" }}>Delete</button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Tasks;