// const CategoryHeader = () => {
//   return (
//     <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-6">
//       <h1 className="text-2xl font-bold text-gray-800">Budget Categories</h1>
//       <button
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: "8px",
//           backgroundColor: "#10b981", // button color
//           color: "white",
//           padding: "8px 16px",
//           borderRadius: "8px",
//           border: "none",
//           cursor: "pointer",
//           marginTop: "8px",
//           marginRight: "8px",
//         }}
//       >
//         + Add Category
//       </button>
//     </div>
//   );
// };
// export default CategoryHeader;

const CategoryHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between", // left ma title, right ma button
        alignItems: "center",
        marginBottom: "24px",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "700",
          color: "#1f2937",
        }}
      >
        Budget Categories
      </h1>

      <button
        style={{
          display: "flex",
          justifyContent: "center", // text horizontally center
          alignItems: "center", // text vertically center
          gap: "8px",
          backgroundColor: "#10b981",
          color: "white",
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          width: "200px",
          fontWeight: "500",
          textAlign: "center", // ensures centered text
        }}
      >
        + Add Category
      </button>
    </div>
  );
};
export default CategoryHeader;
