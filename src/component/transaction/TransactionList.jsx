import React, { useEffect, useState } from "react";
import TransactionItem from "./TransactionItem";
import axios from "axios";

const TransactionList = ({ onDelete }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await axios.get(
        "http://localhost:8080/api/transaction/getAll"
      );
      setTransactions(res.data);
    };
    fetchTransactions();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/transaction/delete/${id}`);
    setTransactions(transactions.filter((t) => t.id !== id));
  };
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        maxWidth: "100%",
      }}
    >
      <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "12px" }}>
        Recent Transactions
      </h2>

      <div>
        {transactions.map((t) => (
          <TransactionItem key={t.id} transaction={t} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
