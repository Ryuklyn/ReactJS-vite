import React, { useState } from "react";

const QuickAddForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    description: "",
    amount: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.description || !form.amount || !form.category) return;
    onAdd(form);
    setForm({ description: "", amount: "", category: "" });
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 mb-6 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Quick Add Transactions</h2>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          name="description"
          value={form.description}
          style={{ padding: "10px", margin: "10px" }}
          onChange={handleChange}
          placeholder="Enter Description"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <input
          type="number"
          style={{ padding: "10px", margin: "10px" }}
          step="0.01"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="00.00"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <select
          name="category"
          style={{ padding: "10px", margin: "10px" }}
          value={form.category}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
        >
          <option value="">Select Category...</option>
          <option value="Food">Food</option>
          <option value="Income">Income</option>
          <option value="Transport">Transport</option>
        </select>
      </div>

      <button
        style={{ padding: "10px", margin: "10px" }}
        onClick={handleSubmit}
        className="p-10  bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition-colors"
      >
        Add Transactions
      </button>
    </div>
  );
};

export default QuickAddForm;
