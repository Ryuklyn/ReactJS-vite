import React from "react";

const ExpenseStats = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)",
        padding: "24px",
        borderRadius: "12px",
        border: "1px solid #bfdbfe",
        marginBottom: "24px",
      }}
    >
      <h4
        style={{
          fontWeight: "600",
          color: "#111827",
          marginBottom: "12px",
          fontSize: "16px",
        }}
      >
        Expense Tracking Stats
      </h4>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: "#6b7280" }}>This Month</span>
          <span style={{ fontWeight: "600", color: "#111827" }}>$2,340.50</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: "#6b7280" }}>Categories</span>
          <span style={{ fontWeight: "600", color: "#111827" }}>8 Active</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: "#6b7280" }}>Budget Used</span>
          <span style={{ fontWeight: "600", color: "#ea580c" }}>78%</span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseStats;
