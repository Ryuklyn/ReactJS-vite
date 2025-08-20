import React, { useState } from "react";
import { ShoppingCart, DollarSign, Car } from "lucide-react";
import QuickAddForm from "./QuickAddForm";
import TransactionList from "../transaction/TransactionList";

const Transaction = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      description: "Grocery Store",
      category: "Food",
      date: "Today",
      amount: -99.9,
      icon: <ShoppingCart size={24} />,
    },
    {
      id: 2,
      description: "Salary Deposited",
      category: "Income",
      date: "Yesterday",
      amount: 999.99,
      icon: <DollarSign size={24} />,
    },
    {
      id: 3,
      description: "Petrol",
      category: "Transport",
      date: "1 days ago",
      amount: -99.9,
      icon: <Car size={24} />,
    },
  ]);

  const handleAdd = (form) => {
    const newTransaction = {
      id: Date.now(),
      description: form.description,
      category: form.category,
      date: "Today",
      amount: parseFloat(form.amount),
      icon:
        form.category === "Food" ? (
          <ShoppingCart size={24} />
        ) : form.category === "Transport" ? (
          <Car size={24} />
        ) : (
          <DollarSign size={24} />
        ),
    };

    setTransactions([newTransaction, ...transactions]);
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div
      style={{
        fontFamily: "Montserrat, sans-serif",
        padding: "16px",
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      <QuickAddForm onAdd={handleAdd} />
      <TransactionList transactions={transactions} onDelete={handleDelete} />
    </div>
  );
};

export default Transaction;
