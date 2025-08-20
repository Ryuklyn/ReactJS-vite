import React, { useState } from "react";

const AddCategoryForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !budget) return;
    onAdd({ name, budget, spent: 0 });
    setName("");
    setBudget("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-8">
      <h2 className="text-xl font-semibold mb-4">Create New Category</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="e.g., Entertainment"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 p-3 border rounded-lg focus:outline-green-400"
        />
        <input
          type="number"
          placeholder="Monthly Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="flex-1 p-3 border rounded-lg focus:outline-green-400"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow w-full sm:w-auto"
        >
          Create Category
        </button>
      </form>
    </div>
  );
};

export default AddCategoryForm;
