import React from "react";
import { Trash2, Edit } from "lucide-react";

const TransactionItem = ({ transaction, onDelete }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "12px",
      }}
    >
      {/* Left side */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div>{transaction.icon}</div>
        <div>
          <p style={{ fontWeight: 500, margin: 0 }}>
            {transaction.description}
          </p>
          <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
            {transaction.category} | {transaction.date}
          </p>
        </div>
      </div>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <p
          style={{
            fontWeight: 600,
            margin: 0,
            color: transaction.amount < 0 ? "#ef4444" : "#22c55e",
          }}
        >
          {transaction.amount < 0
            ? `-$${Math.abs(transaction.amount)}`
            : `+$${transaction.amount}`}
        </p>

        <Edit
          size={20}
          style={{
            cursor: "pointer",
            color: "#4b5563",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#000")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#4b5563")}
        />

        <Trash2
          size={20}
          onClick={() => onDelete(transaction.id)}
          style={{
            cursor: "pointer",
            color: "#ef4444",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#b91c1c")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#ef4444")}
        />
      </div>
    </div>
  );
};

export default TransactionItem;
