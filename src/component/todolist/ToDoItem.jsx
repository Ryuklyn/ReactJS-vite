import React from "react";

const ToDoItem = ({ task, toggleTask }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "12px 16px",
        backgroundColor: task.completed ? "#f9fafb" : "#fff",
      }}
    >
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          cursor: "pointer",
          flex: 1,
        }}
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
            cursor: "pointer",
          }}
        />
        <span
          style={{
            fontSize: "16px",
            color: task.completed ? "#9ca3af" : "#1f2937",
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.text}
        </span>
      </label>

      {task.completed && (
        <span
          style={{
            color: "#059669",
            fontSize: "14px",
            fontWeight: "500",
            backgroundColor: "#d1fae5",
            padding: "4px 12px",
            borderRadius: "9999px",
          }}
        >
          Completed
        </span>
      )}
    </div>
  );
};

export default ToDoItem;
