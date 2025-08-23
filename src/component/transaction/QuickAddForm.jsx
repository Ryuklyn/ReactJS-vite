import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const QuickAddForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "income", // default
    categoryId: "",
  });

  const [incomeCategories, setIncomeCategories] = useState([]);
  const [expenseCategories, setExpenseCategories] = useState([]);
  const [submit, setSubmit] = useState(false);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const incomeResponse = await axios.get(
          "http://localhost:8080/api/category/getAllIncat"
        );
        setIncomeCategories(incomeResponse.data);

        const expenseResponse = await axios.get(
          "http://localhost:8080/api/category/getAllExcat"
        );
        setExpenseCategories(expenseResponse.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = () => {
    setForm((prev) => ({
      ...prev,
      type: prev.type === "income" ? "expense" : "income",
      categoryId: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount || !form.categoryId) return;
    setSubmit(true);
  };

  // POST transaction on submit
  useEffect(() => {
    if (!submit) return;

    const createTransaction = async () => {
      try {
        const payload = {
          title: form.title,
          amount: Number(form.amount),
          type: form.type.toUpperCase(),
          category:
            form.type === "income"
              ? incomeCategories.find((c) => c.id === Number(form.categoryId))
                  ?.incategory
              : expenseCategories.find((c) => c.id === Number(form.categoryId))
                  ?.excategory,
        };

        const response = await axios.post(
          "http://localhost:8080/api/transaction/create",
          payload
        );

        console.log("Transaction created:", response.data);
        setForm({ title: "", amount: "", type: "income", categoryId: "" });

        // Redirect after creation
        navigate("/user/transaction");
      } catch (error) {
        console.error("Error creating transaction:", error);
      } finally {
        setSubmit(false);
      }
    };

    createTransaction();
  }, [submit]);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        padding: "24px",
        marginBottom: "20px",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "20px",
          textAlign: "left",
          color: "#111827",
        }}
      >
        Quick Add Transaction
      </h2>

      {/* Toggle */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            marginRight: "8px",
            fontWeight: "500",
            color: form.type === "income" ? "#10b981" : "#6b7280",
          }}
        >
          Income
        </span>
        <div
          onClick={handleToggle}
          style={{
            position: "relative",
            width: "50px",
            height: "26px",
            backgroundColor: form.type === "income" ? "#10b981" : "#ef4444",
            borderRadius: "20px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "3px",
              left: form.type === "income" ? "3px" : "26px",
              width: "20px",
              height: "20px",
              backgroundColor: "white",
              borderRadius: "50%",
              transition: "0.3s",
            }}
          />
        </div>
        <span
          style={{
            marginLeft: "8px",
            fontWeight: "500",
            color: form.type === "expense" ? "#ef4444" : "#6b7280",
          }}
        >
          Expense
        </span>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            value={form.title}
            onChange={handleChange}
            style={{
              flex: 2,
              padding: "10px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "14px",
              outline: "none",
            }}
          />

          <input
            type="number"
            name="amount"
            placeholder="Enter Amount"
            value={form.amount}
            onChange={handleChange}
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "14px",
              outline: "none",
            }}
          />

          {/* Categories */}
          {form.type === "income" ? (
            <select
              name="categoryId"
              value={form.categoryId}
              onChange={handleChange}
              style={{
                flex: 1.5,
                padding: "10px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
              }}
            >
              <option value="">Income Category</option>
              {incomeCategories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.incategory}
                </option>
              ))}
            </select>
          ) : (
            <select
              name="categoryId"
              value={form.categoryId}
              onChange={handleChange}
              style={{
                flex: 1.5,
                padding: "10px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
              }}
            >
              <option value="">Expense Category</option>
              {expenseCategories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.excategory}
                </option>
              ))}
            </select>
          )}
        </div>

        <div style={{ textAlign: "left" }}>
          <button
            type="submit"
            style={{
              padding: "10px 16px",
              backgroundColor: "#10b981",
              color: "white",
              borderRadius: "8px",
              border: "none",
              fontSize: "15px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuickAddForm;
