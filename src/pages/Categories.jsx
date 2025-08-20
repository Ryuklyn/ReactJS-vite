import AddCategoryForm from "../component/category/AddCategoryForm";
import CategoryCard from "../component/category/CategoryCard";
import CategoryHeader from "../component/category/CategoryHeader";
import React, { useState } from "react";
const Categories = () => {
  const [categories, setCategories] = useState([
    { name: "Food", budget: 500, spent: 320, color: "bg-green-500" },
    { name: "Transport", budget: 500, spent: 320, color: "bg-green-500" },
    { name: "Housing", budget: 1200, spent: 1200, color: "bg-red-500" },
    { name: "Shopping", budget: 300, spent: 150, color: "bg-green-400" },
  ]);

  const addCategory = (newCategory) => {
    setCategories([...categories, { ...newCategory, color: "bg-blue-400" }]);
  };
  const deleteCategory = (name) => {
    setCategories(categories.filter((cat) => cat.name !== name));
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <CategoryHeader />
      <AddCategoryForm onAdd={addCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <CategoryCard key={idx} category={cat} onDelete={deleteCategory} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
