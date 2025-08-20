import React from "react";
import { Edit2, Trash2 } from "lucide-react";
import ProgressBar from "../category/ProgressBar";

const CategoryCard = ({ category, onDelete }) => {
  const { name, budget, spent, color } = category;
  const percentage = ((spent / budget) * 100).toFixed(1);

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <h3 style={{ fontSize: "18px", fontWeight: "600" }}>{name}</h3>
        <div style={{ display: "flex", gap: "12px" }}>
          <Edit2
            style={{
              width: "20px",
              height: "20px",
              color: "#6b7280",
              cursor: "pointer",
            }}
          />
          <Trash2
            style={{
              width: "20px",
              height: "20px",
              color: "#ef4444",
              cursor: "pointer",
            }}
            onClick={() => onDelete(name)}
          />
        </div>
      </div>
      <p style={{ color: "#4b5563", marginBottom: "6px", textAlign: "left" }}>
        ${spent} of ${budget}
      </p>
      <ProgressBar percentage={percentage} color={color} />
      <p
        style={{
          fontSize: "14px",
          color: "#6b7280",
          marginTop: "8px",
          textAlign: "right",
        }}
      >
        {percentage}%
      </p>
    </div>
  );
};

export default CategoryCard;
