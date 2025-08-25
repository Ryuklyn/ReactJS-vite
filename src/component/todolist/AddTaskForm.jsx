import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTaskForm = ({ onAddTask, onClose }) => {
  const navigate = useNavigate();
  const [taskText, setTaskText] = useState("");
  const [loading, setLoading] = useState(false);
  // const [submit, setSubmit] = useState(false);

  // const [formData, setFormData] = useState({
  //   description: "",
  //   status: "PENDING", // default status
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!taskText.trim()) {
      alert("Please enter a task");
      return;
    }

    const payload = {
      description: taskText.trim(),
      status: "PENDING",
      createdAt: new Date().toISOString().replace("Z", ""), // remove Z
    };

    console.log("Sending payload:", payload);

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8080/api/todolist/create",
        payload
      );

      console.log("Task created:", response.data);

      if (onAddTask) {
        onAddTask(response.data);
      }

      setTaskText("");
      onClose();
      // navigate("/user/todo");
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Failed to add task. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Save task to database when submit = true
  // useEffect(() => {
  //   if (!submit) return;

  //   const handleTask = async () => {
  //     console.log("Sending payload:", form); // 👀 check frontend data
  //     try {
  //       setLoading(true);

  //       // Call backend API (adjust URL to match your Spring Boot endpoint)
  //       const response = await axios.post(
  //         "http://localhost:8080/api/todolist/create",
  //         formData
  //       );

  //       console.log("Task created:", response.data);

  //       // Update parent state if needed
  //       if (onAddTask) {
  //         onAddTask(response.data);
  //       }

  //       // Clear form
  //       setTaskText("");
  //       setFormData({ description: "", status: "PENDING" });

  //       // Navigate back to task list
  //       navigate("/user/todo");
  //     } catch (error) {
  //       console.error("Error adding task:", error);
  //       alert("Failed to add task. Please try again.");
  //     } finally {
  //       setLoading(false);
  //       setSubmit(false);
  //     }
  //   };

  //   handleTask();
  // }, [submit, formData, navigate, onAddTask]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          padding: "24px",
          width: "100%",
          maxWidth: "500px",
          margin: "16px",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#111827",
            marginBottom: "20px",
          }}
        >
          Add New Task
        </h2>

        <form onSubmit={handleSubmit}>
          <textarea
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter your task here..."
            disabled={loading}
            style={{
              width: "100%",
              minHeight: "100px",
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "14px",
              outline: "none",
              resize: "vertical",
              fontFamily: "inherit",
              backgroundColor: loading ? "#f9fafb" : "white",
              marginBottom: "20px",
            }}
          />

          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}
          >
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              style={{
                padding: "10px 20px",
                backgroundColor: "#f3f4f6",
                color: "#374151",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !taskText.trim()}
              style={{
                padding: "10px 20px",
                backgroundColor:
                  loading || !taskText.trim() ? "#9ca3af" : "#10b981",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {loading ? "Adding..." : "Add Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
