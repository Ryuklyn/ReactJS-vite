import React from "react";
import { User, Mail, MapPin, Phone } from "lucide-react";
import InputField from "../userprofile/InputField";

const UserInfo = ({ profile, tempProfile, onFieldChange, isEditing }) => {
  return (
    <div>
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#111827",
          paddingBottom: "8px",
          borderBottom: "1px solid #e5e7eb",
          marginBottom: "24px",
          textAlign: "left",
        }}
      >
        Personal Information
      </h3>

      <InputField
        icon={User}
        label="Full Name"
        value={tempProfile.name}
        onChange={(value) => onFieldChange("name", value)}
        isEditing={isEditing}
      />

      <InputField
        icon={Mail}
        label="Email Address"
        value={tempProfile.email}
        onChange={(value) => onFieldChange("email", value)}
        type="email"
        isEditing={isEditing}
      />

      <InputField
        icon={Phone}
        label="Phone Number"
        value={tempProfile.contact}
        onChange={(value) => onFieldChange("contact", value)}
        type="tel"
        isEditing={isEditing}
      />

      <InputField
        icon={MapPin}
        label="Location"
        value={tempProfile.location}
        onChange={(value) => onFieldChange("location", value)}
        isEditing={isEditing}
      />
    </div>
  );
};

export default UserInfo;
