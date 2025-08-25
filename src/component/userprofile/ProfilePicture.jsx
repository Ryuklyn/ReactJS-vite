import React, { useRef } from "react";
import { Camera } from "lucide-react";

const ProfilePicture = ({ image, name, onImageChange, isEditing }) => {
  const fileInputRef = useRef(null);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onImageChange(imageUrl);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
          padding: "5px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {image ? (
            <img
              src={image}
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <span
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                color: "#374151",
              }}
            >
              {getInitials(name)}
            </span>
          )}
        </div>
      </div>
      {isEditing && (
        <button
          onClick={() => fileInputRef.current?.click()}
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            backgroundColor: "#2563eb",
            color: "white",
            padding: "10px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            transition: "all 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          <Camera size={18} />
        </button>
      )}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default ProfilePicture;
