// import React, { useState } from "react";

// const ProfileInfo = ({ profile, onUpdate }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [tempProfile, setTempProfile] = useState(profile);

//   const handleChange = (field, value) => {
//     setTempProfile((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleSave = () => {
//     onUpdate("name", tempProfile.name);
//     onUpdate("email", tempProfile.email);
//     onUpdate("location", tempProfile.location);
//     setIsEditing(false);
//   };

//   return (
//     <div className="w-full space-y-4">
//       {/* Name */}
//       <div>
//         <label className="text-sm text-gray-600">Name</label>
//         {isEditing ? (
//           <input
//             type="text"
//             value={tempProfile.name}
//             onChange={(e) => handleChange("name", e.target.value)}
//             className="w-full border px-3 py-2 rounded-lg mt-1"
//           />
//         ) : (
//           <p className="text-gray-800 font-medium">{profile.name}</p>
//         )}
//       </div>

//       {/* Email */}
//       <div>
//         <label className="text-sm text-gray-600">Email</label>
//         {isEditing ? (
//           <input
//             type="email"
//             value={tempProfile.email}
//             onChange={(e) => handleChange("email", e.target.value)}
//             className="w-full border px-3 py-2 rounded-lg mt-1"
//           />
//         ) : (
//           <p className="text-gray-800">{profile.email}</p>
//         )}
//       </div>

//       {/* Location */}
//       <div>
//         <label className="text-sm text-gray-600">Location</label>
//         {isEditing ? (
//           <input
//             type="text"
//             value={tempProfile.location}
//             onChange={(e) => handleChange("location", e.target.value)}
//             className="w-full border px-3 py-2 rounded-lg mt-1"
//           />
//         ) : (
//           <p className="text-gray-800">{profile.location}</p>
//         )}
//       </div>

//       {/* Action Buttons */}
//       <div className="flex gap-3 mt-4">
//         {isEditing ? (
//           <>
//             <button
//               onClick={handleSave}
//               className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
//             >
//               Save
//             </button>
//             <button
//               onClick={() => setIsEditing(false)}
//               className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg"
//             >
//               Cancel
//             </button>
//           </>
//         ) : (
//           <button
//             onClick={() => setIsEditing(true)}
//             className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
//           >
//             Edit Profile
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProfileInfo;

import React, { useState } from "react";

const ProfileInfo = ({ profile, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState(profile);

  const handleChange = (field, value) => {
    setTempProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    onUpdate("name", tempProfile.name);
    onUpdate("email", tempProfile.email);
    onUpdate("location", tempProfile.location);
    setIsEditing(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Name */}
      <div>
        <label style={{ fontSize: "14px", color: "#6b7280" }}>Name</label>
        {isEditing ? (
          <input
            type="text"
            value={tempProfile.name}
            onChange={(e) => handleChange("name", e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              marginTop: "6px",
            }}
          />
        ) : (
          <p style={{ fontSize: "16px", fontWeight: "500", color: "#111827" }}>
            {profile.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label style={{ fontSize: "14px", color: "#6b7280" }}>Email</label>
        {isEditing ? (
          <input
            type="email"
            value={tempProfile.email}
            onChange={(e) => handleChange("email", e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              marginTop: "6px",
            }}
          />
        ) : (
          <p style={{ fontSize: "16px", color: "#374151" }}>{profile.email}</p>
        )}
      </div>

      {/* Location */}
      <div>
        <label style={{ fontSize: "14px", color: "#6b7280" }}>Location</label>
        {isEditing ? (
          <input
            type="text"
            value={tempProfile.location}
            onChange={(e) => handleChange("location", e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              marginTop: "6px",
            }}
          />
        ) : (
          <p style={{ fontSize: "16px", color: "#374151" }}>
            {profile.location}
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              style={{
                padding: "10px 20px",
                backgroundColor: "#10b981",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#e5e7eb",
                color: "#374151",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
