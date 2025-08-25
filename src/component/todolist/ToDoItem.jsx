// import React from "react";

// const ToDoItem = ({ task, toggleTask }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         border: "1px solid #e5e7eb",
//         borderRadius: "12px",
//         padding: "12px 16px",
//         backgroundColor: task.completed ? "#f9fafb" : "#fff",
//       }}
//     >
//       <label
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: "12px",
//           cursor: "pointer",
//           flex: 1,
//         }}
//       >
//         {/* <input
//           type="checkbox"
//           checked={task.completed}
//           onChange={() => toggleTask(task.id)}
//           style={{
//             width: "20px",
//             height: "20px",
//             borderRadius: "6px",
//             border: "1px solid #d1d5db",
//             cursor: "pointer",
//           }}
//         /> */}
//         <input
//           type="checkbox"
//           checked={task.status === "COMPLETED"}
//           onChange={() => toggleTask(task.id)}
//         />

//         {/* <span
//           style={{
//             fontSize: "16px",
//             color: task.completed ? "#9ca3af" : "#1f2937",
//             textDecoration: task.completed ? "line-through" : "none",
//           }}
//         >
//           {task.text}
//         </span> */}
//         <span
//           style={{
//             fontSize: "16px",
//             color: task.status === "COMPLETED" ? "#9ca3af" : "#1f2937",
//             textDecoration:
//               task.status === "COMPLETED" ? "line-through" : "none",
//           }}
//         >
//           {task.description}
//         </span>
//       </label>

//       {task.completed && (
//         <span
//           style={{
//             color: "#059669",
//             fontSize: "14px",
//             fontWeight: "500",
//             backgroundColor: "#d1fae5",
//             padding: "4px 12px",
//             borderRadius: "9999px",
//           }}
//         >
//           Completed
//         </span>
//       )}
//     </div>
//   );
// };

// export default ToDoItem;

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
        backgroundColor: task.status === "COMPLETED" ? "#f9fafb" : "#fff",
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
          checked={task.status === "COMPLETED"}
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
            color: task.status === "COMPLETED" ? "#9ca3af" : "#1f2937",
            textDecoration:
              task.status === "COMPLETED" ? "line-through" : "none",
          }}
        >
          {task.description}{" "}
          <small
            style={{ color: "#6b7280", marginLeft: "8px", fontSize: "12px" }}
          >
            ({new Date(task.createdAt).toLocaleString()})
          </small>
        </span>
      </label>

      {task.status === "COMPLETED" && (
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
