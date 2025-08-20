import AddCategoryForm from "../component/category/AddCategoryForm";
import CategoryCard from "../component/category/CategoryCard";
import CategoryHeader from "../component/category/CategoryHeader";
import React, { useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([
    { name: "Food", budget: 500, spent: 320, color: "#22c55e" },
    { name: "Transport", budget: 200, spent: 180, color: "#facc15" },
    { name: "Housing", budget: 1200, spent: 1200, color: "#ef4444" },
    { name: "Shopping", budget: 300, spent: 150, color: "#22c55e" },
  ]);

  const addCategory = (newCategory) => {
    setCategories([...categories, { ...newCategory, color: "#3b82f6" }]);
  };

  const deleteCategory = (name) => {
    setCategories(categories.filter((cat) => cat.name !== name));
  };

  return (
    <div
      style={{
        padding: "32px",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      <CategoryHeader />
      <AddCategoryForm onAdd={addCategory} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {categories.map((cat, idx) => (
          <CategoryCard key={idx} category={cat} onDelete={deleteCategory} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
