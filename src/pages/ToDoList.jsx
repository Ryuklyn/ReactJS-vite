import { useState } from "react";
import ToDoItem from "../component/todolist/ToDoItem";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Review monthly budget", completed: false },
    { id: 2, text: "Set up emergency fund", completed: true },
    { id: 3, text: "Check insurance policies", completed: false },
    { id: 4, text: "Plan vacation budget", completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        width: "100%",
        marginTop: "32px",
        marginLeft: "32px",
        maxWidth: "1200px",
      }}
    >
      {/* Header with title + button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#374151",
            margin: 0,
          }}
        >
          <span style={{ fontSize: "18px" }}>☰</span> Financial To-Do List
        </h2>

        {/* Add Task Button */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#10b981",
            color: "white",
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "500",
            marginRight: "8px",
          }}
        >
          + Add Task
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {tasks.map((task) => (
          <ToDoItem key={task.id} task={task} toggleTask={toggleTask} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
