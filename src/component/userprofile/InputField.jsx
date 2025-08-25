import React from "react";

const InputField = ({
  icon: Icon,
  label,
  value,
  onChange,
  type = "text",
  isEditing,
}) => (
  <div style={{ marginBottom: "24px" }}>
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "14px",
        fontWeight: "500",
        color: "#374151",
        marginBottom: "8px",
      }}
    >
      <Icon size={16} />
      {label}
    </label>
    {isEditing ? (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 16px",
          border: "1px solid #d1d5db",
          borderRadius: "8px",
          fontSize: "16px",
          transition: "all 0.2s",
          boxSizing: "border-box",
        }}
        onFocus={(e) => {
          e.target.style.outline = "none";
          e.target.style.borderColor = "#3b82f6";
          e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "#d1d5db";
          e.target.style.boxShadow = "none";
        }}
      />
    ) : (
      <p
        style={{
          color: "#111827",
          backgroundColor: "#f9fafb",
          padding: "12px 16px",
          borderRadius: "8px",
          margin: 0,
          fontSize: "16px",
        }}
      >
        {value}
      </p>
    )}
  </div>
);

export default InputField;
