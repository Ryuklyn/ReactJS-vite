import { useState } from "react";
import ProfileInfo from "../component/userprofile/ProfileInfo";
import ProfilePicture from "../component/userprofile/ProfilePicture";
import DefaultAvatar from "../image/default-avatar.png"; // adjust path as needed

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    contact: "+1234567890",
    email: "john.doe@example.com",
    location: "123 Main St, City, Country",
    image: DefaultAvatar,
  });

  const handleUpdate = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "32px",
        borderRadius: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        marginTop: "32px",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "700",
          marginBottom: "24px",
          color: "#1f2937",
          textAlign: "center",
        }}
      >
        User Profile
      </h2>

      {/* Profile Layout */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          alignItems: "flex-start",
        }}
      >
        {/* Left: Picture */}
        <div style={{ flex: "0 0 180px", textAlign: "center" }}>
          <ProfilePicture image={profile.image} onUpdate={handleUpdate} />
        </div>

        {/* Right: Info */}
        <div style={{ flex: 1 }}>
          <ProfileInfo profile={profile} onUpdate={handleUpdate} />
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
