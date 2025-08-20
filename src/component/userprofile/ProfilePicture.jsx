import React, { useRef } from "react";
import DefaultAvatar from "../../image/default-avatar.png"; // adjust path as needed

const ProfilePicture = ({ image, onUpdate }) => {
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onUpdate("image", imageUrl);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src={image || DefaultAvatar}
        alt="Profile"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #e5e7eb",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      />
      <button
        onClick={() => fileInputRef.current.click()}
        style={{
          marginTop: "12px",
          padding: "6px 16px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "9999px",
          fontSize: "14px",
          cursor: "pointer",
          transition: "0.2s",
        }}
      >
        Change Photo
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ProfilePicture;
