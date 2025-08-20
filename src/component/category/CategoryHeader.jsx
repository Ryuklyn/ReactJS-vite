const CategoryHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-6">
      <h1 className="text-2xl font-bold text-gray-800">Budget Categories</h1>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#10b981", // button color
          color: "white",
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          marginTop: "8px",
          marginRight: "8px",
        }}
      >
        + Add Category
      </button>
    </div>
  );
};
export default CategoryHeader;
