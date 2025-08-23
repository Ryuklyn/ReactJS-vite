import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Car,
  Home,
  UtensilsCrossed,
  ShoppingBag,
} from "lucide-react";
import "./Body.css";

const Body = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/transaction/getAll")
      .then((res) => {
        setTransactions(res.data);

        const income = res.data
          .filter((t) => t.type.toLowerCase() === "income")
          .reduce((sum, t) => sum + Number(t.amount), 0);

        const expense = res.data
          .filter((t) => t.type.toLowerCase() === "expense")
          .reduce((sum, t) => sum + Number(t.amount), 0);

        setTotalIncome(income);
        setTotalExpense(expense);
      })
      .catch((err) => console.error("Error fetching transactions:", err));
  }, []);

  // Utility function to format created_at to relative time
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

  const totalBalance = totalIncome - totalExpense;

  const budgetCategories = [
    {
      icon: UtensilsCrossed,
      label: "Food",
      spent: 320,
      budget: 500,
      color: "#22c55e",
    },
    {
      icon: Car,
      label: "Transport",
      spent: 180,
      budget: 200,
      color: "#facc15",
    },
    {
      icon: Home,
      label: "Housing",
      spent: 1200,
      budget: 1200,
      color: "#ef4444",
    },
    {
      icon: ShoppingBag,
      label: "Shopping",
      spent: 150,
      budget: 300,
      color: "#22c55e",
    },
  ];

  const StatCard = ({ title, value, icon: Icon, subtitle, type }) => (
    <div className="stat-card">
      <div className="stat-header">
        <span className="stat-title">{title}</span>
        <div className="stat-icon">
          <Icon size={20} />
        </div>
      </div>
      <div
        className={`stat-value ${
          type === "income"
            ? "text-green-600"
            : type === "expense"
            ? "text-red-500"
            : "text-black"
        }`}
      >
        {value.toFixed(2)} Rs
      </div>
      <div className="stat-subtitle">{subtitle}</div>
    </div>
  );

  const TransactionItem = ({ transaction }) => (
    <div className="transaction-item">
      <div>
        <div className="transaction-name">{transaction.title}</div>
        <div className="transaction-info">
          {transaction.category} • {formatRelativeTime(transaction.createdAt)}
        </div>
      </div>
      <div
        className={`transaction-amount ${
          transaction.type.toLowerCase() === "income"
            ? "text-green-600"
            : "text-red-500"
        }`}
      >
        {transaction.type.toLowerCase() === "income" ? "+" : "-"}
        {transaction.amount} Rs
      </div>
    </div>
  );

  return (
    <div className="dashboard-container">
      {/* Top Stats */}
      <div className="stats-grid">
        <StatCard
          title="Total Balance"
          value={totalBalance}
          icon={DollarSign}
          subtitle={`+${(totalIncome - totalExpense) / 10} Rs this week`}
        />
        <StatCard
          title="Monthly Income"
          value={totalIncome}
          icon={TrendingUp}
          type="income"
          subtitle="Last deposit: Yesterday"
        />
        <StatCard
          title="Monthly Expenses"
          value={totalExpense}
          icon={TrendingDown}
          type="expense"
          subtitle="Last expense: 2 days ago"
        />
      </div>

      {/* Bottom Section */}
      <div className="bottom-grid">
        {/* Budget Categories */}
        <div className="budget-card">
          <h3 className="section-title">Budget Categories</h3>
          {budgetCategories.map((cat, i) => {
            const percent = (cat.spent / cat.budget) * 100;
            return (
              <div key={i} className="budget-item">
                <div className="budget-label">
                  <cat.icon size={18} /> {cat.label}
                </div>
                <div className="budget-progress">
                  <div
                    className="budget-bar"
                    style={{ width: `${percent}%`, background: cat.color }}
                  ></div>
                </div>
                <div className="budget-amount">
                  {cat.spent} / {cat.budget}
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Transactions */}
        <div className="transactions-card">
          <h3 className="section-title">Recent Transactions</h3>
          {transactions.map((t, i) => (
            <TransactionItem key={i} transaction={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
