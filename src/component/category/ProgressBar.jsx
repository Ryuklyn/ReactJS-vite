// import React from "react";

// const ProgressBar = ({ percentage, color }) => {
//   return (
//     <div className="w-full bg-gray-200 rounded-full h-3">
//       <div
//         className="h-3 rounded-full transition-all duration-300"
//         style={{
//           width: `${percentage}%`,
//           backgroundColor: color || "#4caf50", // default green
//         }}
//       ></div>
//     </div>
//   );
// };

// export default ProgressBar;

import React from "react";

const ProgressBar = ({ percentage, color }) => {
  return (
    <div
      style={{
        width: "100%",
        background: "#e5e7eb",
        borderRadius: "9999px",
        height: "10px",
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          backgroundColor: color || "#22c55e",
          height: "10px",
          borderRadius: "9999px",
          transition: "width 0.3s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
