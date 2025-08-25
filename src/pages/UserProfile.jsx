import React, { useState } from "react";
import ProfileHeader from "../component/userprofile/ProfileHeader";
import ProfilePicture from "../component/userprofile/ProfilePicture";
import UserInfo from "../component/userprofile/UserInfo";
import StatsCard from "../component/userprofile/StatsCard";
import ExpenseStats from "../component/userprofile/ExpenseStats";
import QuickActions from "../component/userprofile/QuickActions";

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    contact: "+1234567890",
    email: "john.doe@example.com",
    location: "San Francisco, CA",
    image: null,
    joinedDate: "January 2024",
    totalExpenses: "$12,450.00",
    monthlyBudget: "$3,000.00",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState(profile);

  const handleFieldChange = (field, value) => {
    setTempProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #dbeafe 100%)",
        padding: "16px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Main Profile Card */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Profile Header with Edit Controls */}
          <ProfileHeader
            isEditing={isEditing}
            onEdit={handleEdit}
            onSave={handleSave}
            onCancel={handleCancel}
          />

          {/* Scrollable Content Area */}
          <div
            style={{
              flex: 1,
              overflow: "auto",
              padding: "24px",
            }}
          >
            {/* Profile Picture and Basic Info Section */}
            <div
              style={{
                display: "flex",
                flexDirection: window.innerWidth < 768 ? "column" : "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "24px",
                marginBottom: "24px",
                paddingTop: "20px",
              }}
            >
              {/* Left side: Profile Picture + Name */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: "0 0 auto",
                }}
              >
                <ProfilePicture
                  image={tempProfile.image}
                  name={tempProfile.name}
                  onImageChange={(imageUrl) =>
                    handleFieldChange("image", imageUrl)
                  }
                  isEditing={isEditing}
                />
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#111827",
                    margin: "16px 0 4px 0",
                    textAlign: "center",
                  }}
                >
                  {tempProfile.name}
                </h2>
                <p
                  style={{
                    color: "#6b7280",
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  Member since {profile.joinedDate}
                </p>
              </div>

              {/* Right side: Stats */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flex: 1,
                  justifyContent: "center",
                  maxWidth: "400px",
                }}
              >
                <StatsCard
                  title="Monthly Budget"
                  value={profile.monthlyBudget}
                  bgColor="#ecfdf5"
                  textColor="#065f46"
                />
                <StatsCard
                  title="Total Expenses"
                  value={profile.totalExpenses}
                  bgColor="#eff6ff"
                  textColor="#1e40af"
                />
              </div>
            </div>

            {/* Main Content Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  window.innerWidth < 768 ? "1fr" : "1fr 1fr",
                gap: "24px",
                paddingBottom: "20px",
              }}
            >
              {/* Left Column - Personal Information */}
              <UserInfo
                profile={profile}
                tempProfile={tempProfile}
                onFieldChange={handleFieldChange}
                isEditing={isEditing}
              />

              {/* Right Column - Account Preferences */}
              <div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#111827",
                    paddingBottom: "8px",
                    borderBottom: "1px solid #e5e7eb",
                    marginBottom: "24px",
                  }}
                >
                  Account Preferences
                </h3>

                {/* Expense Tracking Stats */}
                <ExpenseStats />

                {/* Quick Actions */}
                <QuickActions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
