import { useState } from "react";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default AddTask;