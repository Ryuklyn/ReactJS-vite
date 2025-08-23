import React, { useEffect, useState } from "react";
import { Trash2, Edit } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TransactionItem = ({ transaction, onDelete }) => {
  // const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const navigate = useNavigate();

  const handleEditClick = () => {
    // Navigate to the AddTransaction component with the transaction ID
    navigate(`/user/add-transaction/${transaction.id}`);
    // or if your route is different:
    // navigate(`/user/edit-transaction/${transaction.id}`);
  };

  // Fetch transactions from backend
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/transaction/getAll"
        );
        setTransactions(res.data);
        console.log("Transactions fetched:", res.data);

        const income = res.data
          .filter((t) => t.type.toLowerCase() === "income")
          .reduce((sum, t) => sum + Number(t.amount), 0);
        const expense = res.data
          .filter((t) => t.type.toLowerCase() === "expense")
          .reduce((sum, t) => sum + Number(t.amount), 0);

        setTotalIncome(income);
        setTotalExpense(expense);
      } catch (err) {
        console.error("Error fetching transactions:", err);
      }
    };

    fetchTransactions();
  }, []);

  // Delete transaction
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/transaction/delete/${id}`);
      setTransactions(transactions.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Error deleting transaction:", err);
    }
  };

  // Format createdAt to relative time
  const formatRelativeTime = (dateString) => {
    const createdDate = new Date(dateString);
    const now = new Date();
    const diffMs = now - createdDate;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} week(s) ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} month(s) ago`;
    return `${Math.floor(diffDays / 365)} year(s) ago`;
  };

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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p style={{ fontWeight: 500, margin: 0, textAlign: "left" }}>
          {transaction.title}
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            margin: 0,
            textAlign: "left",
          }}
        >
          {transaction.category} • {formatRelativeTime(transaction.createdAt)}
        </p>
      </div>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <p
          style={{
            fontWeight: 600,
            margin: 0,
            color:
              transaction.type.toLowerCase() === "income"
                ? "#22c55e"
                : "#ef4444",
          }}
        >
          {transaction.type.toLowerCase() === "income" ? "+" : "-"}
          {transaction.amount} Rs
        </p>

        <Edit
          size={20}
          style={{ cursor: "pointer", color: "#4b5563" }}
          onClick={handleEditClick}
        />

        <Trash2
          size={20}
          style={{ cursor: "pointer", color: "#ef4444" }}
          onClick={() => onDelete(transaction.id)}
        />
      </div>
    </div>
  );
};

export default TransactionItem;
