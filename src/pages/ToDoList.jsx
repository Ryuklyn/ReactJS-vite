// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ToDoItem from "../component/todolist/ToDoItem";
// import AddTaskForm from "../component/todolist/AddTaskForm";

// const ToDoList = () => {
//   const navigate = useNavigate();
//   const [tasks, setTasks] = useState([
//     { id: 1, text: "Review monthly budget", completed: false },
//     { id: 2, text: "Set up emergency fund", completed: true },
//     { id: 3, text: "Check insurance policies", completed: false },
//     { id: 4, text: "Plan vacation budget", completed: false },
//   ]);

//   const [showAddTaskForm, setShowAddTaskForm] = useState(false);

//   const toggleTask = (id) => {
//     setTasks((prev) =>
//       prev.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const addTask = (taskText) => {
//     const newTask = {
//       id: tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
//       text: taskText,
//       completed: false,
//     };
//     setTasks((prev) => [...prev, newTask]);
//     setShowAddTaskForm(false);
//     // Redirect to user/todolist after adding task
//     navigate("/user/todolist");
//   };

//   const handleAddTaskClick = () => {
//     setShowAddTaskForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowAddTaskForm(false);
//   };

//   return (
//     <>
//       <div
//         style={{
//           background: "#fff",
//           padding: "24px",
//           borderRadius: "16px",
//           boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//           width: "100%",
//           marginTop: "32px",
//           marginLeft: "32px",
//           maxWidth: "1200px",
//         }}
//       >
//         {/* Header with title + button */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginBottom: "16px",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "20px",
//               fontWeight: "700",
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//               color: "#374151",
//               margin: 0,
//             }}
//           >
//             <span style={{ fontSize: "18px" }}>☰</span> Financial To-Do List
//           </h2>
//           {/* Add Task Button */}
//           <button
//             onClick={handleAddTaskClick}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//               backgroundColor: "#10b981",
//               color: "white",
//               padding: "8px 16px",
//               borderRadius: "8px",
//               border: "none",
//               cursor: "pointer",
//               fontWeight: "500",
//               marginRight: "8px",
//             }}
//           >
//             + Add Task
//           </button>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//           {tasks.map((task) => (
//             <ToDoItem key={task.id} task={task} toggleTask={toggleTask} />
//           ))}
//         </div>
//       </div>

//       {/* Add Task Form Modal */}
//       {showAddTaskForm && (
//         <AddTaskForm onAddTask={addTask} onClose={handleCloseForm} />
//       )}
//     </>
//   );
// };

// export default ToDoList;

import { useState, useEffect } from "react";
import axios from "axios";
import ToDoItem from "../component/todolist/ToDoItem";
import AddTaskForm from "../component/todolist/AddTaskForm";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  // 🔹 Fetch tasks from backend on mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/todolist/getAlltodo"
        );
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  // 🔹 Toggle completed (frontend-only, can persist later)
  const toggleTask = async (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id
        ? { ...t, status: t.status === "PENDING" ? "COMPLETED" : "PENDING" }
        : t
    );
    setTasks(updatedTasks);

    // Optional: persist status change
    const taskToUpdate = updatedTasks.find((t) => t.id === id);
    try {
      await axios.put(`http://localhost:8080/api/todolist/${id}`, taskToUpdate);
    } catch (error) {
      console.error("Failed to update task status:", error);
    }
  };

  // 🔹 Add new task
  // const addTask = async (taskText) => {
  //   const newTask = {
  //     description: taskText,
  //     status: "PENDING",
  //     createdAt: new Date().toISOString(),
  //   };
  // };
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // 🔹 Delete completed tasks
  const deleteCompleted = async () => {
    try {
      const completedTasks = tasks.filter((t) => t.status === "COMPLETED");
      await Promise.all(
        completedTasks.map((task) =>
          axios.delete(`http://localhost:8080/api/todolist/delete/${task.id}`)
        )
      );
      setTasks((prev) => prev.filter((t) => t.status !== "COMPLETED"));
    } catch (error) {
      console.error("Error deleting tasks:", error);
    }
  };

  return (
    <>
      <div
        style={{
          padding: "24px",
          margin: "20px",
          borderRadius: "16px",
          background: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "16px",
            // padding: "12px 16px",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#111827",
            }}
          >
            Financial To-Do List
          </h2>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setShowAddTaskForm(true)}
              style={{
                background: "#10b981",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "none",
              }}
            >
              + Add Task
            </button>
            <button
              onClick={deleteCompleted}
              style={{
                background: "#ef4444",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "none",
              }}
            >
              Delete Completed
            </button>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {tasks.map((task) => (
            <ToDoItem key={task.id} task={task} toggleTask={toggleTask} />
          ))}
        </div>
      </div>

      {showAddTaskForm && (
        <AddTaskForm
          onAddTask={addTask}
          onClose={() => setShowAddTaskForm(false)}
        />
      )}
    </>
  );
};

export default ToDoList;
