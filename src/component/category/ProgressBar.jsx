import React from "react";

const ProgressBar = ({ percentage, color }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="h-3 rounded-full transition-all duration-300"
        style={{
          width: `${percentage}%`,
          backgroundColor: color || "#4caf50", // default green
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
