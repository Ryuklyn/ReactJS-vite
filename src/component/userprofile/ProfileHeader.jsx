import React from "react";
import { Edit3, Save, X } from "lucide-react";

const ProfileHeader = ({ isEditing, onEdit, onSave, onCancel }) => {
  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.2s",
  };

  return (
    <div
      style={{
        height: "75px",
        background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
        }}
      >
        {!isEditing ? (
          <button
            onClick={onEdit}
            style={{
              ...buttonStyle,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              color: "white",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)")
            }
          >
            <Edit3 size={16} />
            Edit Profile
          </button>
        ) : (
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={onSave}
              style={{
                ...buttonStyle,
                backgroundColor: "#10b981",
                color: "white",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#059669")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#10b981")}
            >
              <Save size={16} />
              Save
            </button>
            <button
              onClick={onCancel}
              style={{
                ...buttonStyle,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                color: "white",
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)")
              }
            >
              <X size={16} />
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
