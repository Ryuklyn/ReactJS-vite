import React from "react";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Car,
  Home,
  UtensilsCrossed,
} from "lucide-react";
import "./Body.css";

const Body = ({
  totalBalance = "$999.99",
  monthlyIncome = "$999.99",
  monthlyExpenses = "$999.99",
  balanceChange = "+$9.99 this month",
  lastDeposited = "Yesterday",
  budget = "$99",
}) => {
  const budgetCategories = [
    {
      icon: UtensilsCrossed,
      label: "Food",
      amount: "$320",
      budget: "$500",
      color: "#22c55e",
      percentage: 64,
    },
    {
      icon: Car,
      label: "Transport",
      amount: "$320",
      budget: "$500",
      color: "#ef4444",
      percentage: 64,
    },
    {
      icon: Home,
      label: "Housing",
      amount: "$320",
      budget: "$500",
      color: "#f97316",
      percentage: 64,
    },
  ];

  const recentTransactions = [
    {
      name: "Grocery Store",
      category: "Food",
      time: "Today",
      amount: "$99.9",
      type: "expense",
    },
    {
      name: "Salary Deposited",
      category: "Income",
      time: "Yesterday",
      amount: "+$999.99",
      type: "income",
    },
    {
      name: "Petrol",
      category: "Transport",
      time: "1 day ago",
      amount: "$99.9",
      type: "expense",
    },
    {
      name: "Coffee Shop",
      category: "Food",
      time: "2 days ago",
      amount: "$99.9",
      type: "expense",
    },
  ];

  const StatCard = ({ title, value, change, icon: Icon, changeColor }) => (
    <div className="stat-card">
      <div className="stat-header">
        <span className="stat-title">{title}</span>
        <div className={`stat-icon ${changeColor}`}>
          <Icon size={20} />
        </div>
      </div>
      <div className="stat-value">{value}</div>
      <div className="stat-change">{change}</div>
    </div>
  );

  const BudgetCategoryItem = ({ category }) => (
    <div className="budget-item">
      <div className="budget-icon" style={{ color: category.color }}>
        <category.icon size={18} />
      </div>
      <div className="budget-details">
        <div className="budget-row">
          <span className="budget-label">{category.label}</span>
          <span className="budget-amount">
            {category.amount} / {category.budget}
          </span>
        </div>
        <div className="budget-bar-container">
          <div
            className="budget-bar"
            style={{
              width: `${category.percentage}%`,
              backgroundColor: category.color,
            }}
          ></div>
        </div>
      </div>
    </div>
  );

  const TransactionItem = ({ transaction }) => (
    <div className="transaction-item">
      <div>
        <div className="transaction-name">{transaction.name}</div>
        <div className="transaction-info">
          {transaction.category} | {transaction.time}
        </div>
      </div>
      <div className={`transaction-amount ${transaction.type}`}>
        {transaction.amount}
      </div>
    </div>
  );

  return (
    <div className="dashboard-container">
      {/* Header */}
      {/* <div className="dashboard-header">
        <h1>Welcome, Rukesh</h1>
        <button className="add-btn">+ Add Transactions</button>
      </div> */}

      {/* Stats */}
      <div className="stats-grid">
        <StatCard
          title="Total Balance"
          value={totalBalance}
          change={balanceChange}
          icon={DollarSign}
          changeColor="green"
        />
        <StatCard
          title="Monthly Income"
          value={monthlyIncome}
          change={`Last Deposited: ${lastDeposited}`}
          icon={TrendingUp}
          changeColor="green"
        />
        <StatCard
          title="Monthly Expenses"
          value={monthlyExpenses}
          change={`Budget: ${budget}`}
          icon={TrendingDown}
          changeColor="red"
        />
      </div>

      {/* Bottom Section */}
      <div className="bottom-grid">
        {/* Budget Categories */}
        <div>
          <h3 className="section-title">Budget Categories</h3>
          {budgetCategories.map((cat, i) => (
            <BudgetCategoryItem key={i} category={cat} />
          ))}
        </div>

        {/* Recent Transactions */}
        <div>
          <h3 className="section-title">Recent Transactions</h3>
          {recentTransactions.map((t, i) => (
            <TransactionItem key={i} transaction={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
