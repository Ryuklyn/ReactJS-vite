import React from "react";
import { Plus } from "lucide-react";

const Header = ({ userName = "Rukesh", onAddTransaction }) => {
  const handleAddTransaction = () => {
    if (onAddTransaction) {
      onAddTransaction();
    } else {
      console.log("Add Transaction clicked");
      // Default behavior - you can add modal opening logic here
    }
  };

  // return (
  //   <div className="bg-white border-b border-gray-200 px-8 py-6">
  //     <div className="flex justify-between items-center">
  //       <h1 className="text-2xl font-semibold text-gray-900">
  //         Welcome, {userName}
  //       </h1>
  //       <button
  //         onClick={handleAddTransaction}
  //         style={{
  //           display: "flex",
  //           alignItems: "center",
  //           gap: "8px",
  //           backgroundColor: "#10b981", // button color (#10b981)
  //           color: "white",
  //           padding: "8px 16px",
  //           borderRadius: "8px",
  //           border: "none",
  //           cursor: "pointer",
  //         }}
  //       >
  //         <Plus size={20} />
  //         Add Transactions
  //       </button>
  //     </div>
  //   </div>
  // );
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-6">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "8px",
          margin: "8px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome, {userName}
        </h1>

        <button
          onClick={handleAddTransaction}
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
            marginRight: "8px",
          }}
        >
          <Plus size={20} />
          Add Transactions
        </button>
      </div>
    </div>
  );
};

export default Header;
