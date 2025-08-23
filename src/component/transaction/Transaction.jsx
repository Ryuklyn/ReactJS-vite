// import React, { useEffect, useState } from "react";
// import { ShoppingCart, DollarSign, Car } from "lucide-react";
// import QuickAddForm from "./QuickAddForm";
// import TransactionList from "../transaction/TransactionList";
// import axios from "axios";

// const Transaction = () => {
//   const [transactions, setTransactions] = useState([]);

//   // Fetch all transactions once on mount
//   useEffect(() => {
//     const fetchTransactions = async () => {
//       const res = await axios.get(
//         "http://localhost:8080/api/transaction/getAll"
//       );
//       setTransactions(res.data);
//     };
//     fetchTransactions();
//   }, []);

//   // Add new transaction (called from QuickAddForm)
//   const handleAdd = async (newTransaction) => {
//     try {
//       const res = await axios.post(
//         "http://localhost:8080/api/transaction/add",
//         newTransaction
//       );
//       // ✅ Update frontend immediately
//       // setTransactions((prev) => [res.data, ...prev]);
//       setTransactions((prev) => [newTransaction, ...prev]);
//     } catch (err) {
//       console.error("Error adding transaction:", err);
//     }
//   };

//   // Delete transaction
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/transaction/delete/${id}`);
//       setTransactions((prev) => prev.filter((t) => t.id !== id));
//     } catch (err) {
//       console.error("Error deleting transaction:", err);
//     }
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "Montserrat, sans-serif",
//         padding: "16px",
//         maxWidth: "100%",
//         margin: "0 auto",
//       }}
//     >
//       <QuickAddForm onAdd={handleAdd} />
//       <TransactionList transactions={transactions} onDelete={handleDelete} />
//     </div>
//   );
// };

// export default Transaction;

import React, { useEffect, useState } from "react";
import QuickAddForm from "./QuickAddForm";
import TransactionList from "../transaction/TransactionList";
import axios from "axios";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);

  // Fetch all transactions on mount
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/transaction/getAll"
      );
      setTransactions(res.data);
    } catch (err) {
      console.error("Error fetching transactions:", err);
    }
  };

  // Add new transaction
  const handleAdd = async (newTransaction) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/transaction/add", // ✅ use ONE endpoint only
        newTransaction
      );
      setTransactions((prev) => [res.data, ...prev]); // backend returns saved transaction with id
    } catch (err) {
      console.error("Error adding transaction:", err);
    }
  };

  // Delete transaction
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/transaction/delete/${id}`);
      setTransactions((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Error deleting transaction:", err);
    }
  };

  return (
    <div style={{ fontFamily: "Montserrat, sans-serif", padding: "16px" }}>
      <QuickAddForm onAdd={handleAdd} />
      <TransactionList transactions={transactions} onDelete={handleDelete} />
    </div>
  );
};

export default Transaction;
