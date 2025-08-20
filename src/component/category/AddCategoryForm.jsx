// import React, { useState } from "react";

// const AddCategoryForm = ({ onAdd }) => {
//   const [name, setName] = useState("");
//   const [budget, setBudget] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !budget) return;
//     onAdd({ name, budget, spent: 0 });
//     setName("");
//     setBudget("");
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow mb-8">
//       <h2 className="text-xl font-semibold mb-4">Create New Category</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
//         <input
//           type="text"
//           placeholder="e.g., Entertainment"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="flex-1 p-3 border rounded-lg focus:outline-green-400"
//         />
//         <input
//           type="number"
//           placeholder="Monthly Budget"
//           value={budget}
//           onChange={(e) => setBudget(e.target.value)}
//           className="flex-1 p-3 border rounded-lg focus:outline-green-400"
//         />
//         <button
//           type="submit"
//           className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow w-full sm:w-auto"
//         >
//           Create Category
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddCategoryForm;

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
    <div
      style={{
        background: "#fff",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        marginBottom: "32px",
      }}
    >
      <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>
        Create New Category
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <input
          type="text"
          placeholder="e.g., Entertainment"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            flex: 1,
            minWidth: "200px",
            padding: "12px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
          }}
        />
        <input
          type="number"
          placeholder="Monthly Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          style={{
            flex: 1,
            minWidth: "200px",
            padding: "12px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#10b981",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            fontWeight: "500",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            cursor: "pointer",
            minWidth: "150px",
          }}
        >
          Create Category
        </button>
      </form>
    </div>
  );
};

export default AddCategoryForm;
