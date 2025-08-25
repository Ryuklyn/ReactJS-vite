import React from "react";

const QuickActions = () => {
  const actionStyle = {
    width: "100%",
    textAlign: "left",
    padding: "12px 16px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    color: "#374151",
    fontSize: "14px",
    marginBottom: "8px",
    transition: "all 0.2s",
  };

  const dangerActionStyle = {
    ...actionStyle,
    color: "#dc2626",
  };

  const handleExportData = () => {
    // Handle export functionality
    console.log("Exporting expense data...");
  };

  const handleResetBudget = () => {
    // Handle budget reset functionality
    console.log("Resetting monthly budget...");
  };

  const handleDeleteAccount = () => {
    // Handle account deletion functionality
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      console.log("Deleting account...");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        padding: "24px",
        borderRadius: "12px",
      }}
    >
      <h4
        style={{
          fontWeight: "600",
          color: "#111827",
          marginBottom: "12px",
          fontSize: "16px",
        }}
      >
        Quick Actions
      </h4>
      <div>
        <button
          style={actionStyle}
          onClick={handleExportData}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ffffff")}
        >
          Export Expense Data
        </button>
        <button
          style={actionStyle}
          onClick={handleResetBudget}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ffffff")}
        >
          Reset Monthly Budget
        </button>
        <button
          style={dangerActionStyle}
          onClick={handleDeleteAccount}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#fef2f2")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ffffff")}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
