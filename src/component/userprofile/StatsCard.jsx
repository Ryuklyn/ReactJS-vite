import React from "react";

const StatsCard = ({ title, value, bgColor, textColor }) => (
  <div
    style={{
      backgroundColor: bgColor,
      padding: "12px",
      borderRadius: "8px",
    }}
  >
    <p
      style={{
        fontSize: "14px",
        color: textColor,
        fontWeight: "500",
        margin: "0 0 4px 0",
      }}
    >
      {title}
    </p>
    <p
      style={{
        fontSize: "18px",
        fontWeight: "bold",
        color: textColor,
        margin: 0,
      }}
    >
      {value}
    </p>
  </div>
);

export default StatsCard;
