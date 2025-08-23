// import React from "react";
// import {
//   LayoutGrid,
//   CreditCard,
//   BarChart3,
//   Grid3x3,
//   CheckSquare,
//   User,
//   Bell,
//   LogOut,
// } from "lucide-react";
// import "./Sidebar.css";
// import { useNavigate } from "react-router-dom";

// const Sidebar = () => {
//   const navigate = useNavigate();

//   const sidebarItems = [
//     {
//       icon: LayoutGrid,
//       label: "Overview",
//       path: "/user/dashboard",
//       active: true,
//     },
//     {
//       icon: CreditCard,
//       label: "Transactions",
//       path: "/user/transaction",
//       active: false,
//     },
//     { icon: BarChart3, label: "Charts", path: "/user/charts", active: false },
//     { icon: Grid3x3, label: "Category", path: "/user/category", active: false },
//     {
//       icon: CheckSquare,
//       label: "To-Do-List",
//       path: "/user/todo",
//       active: false,
//     },
//     { icon: User, label: "Profile", path: "/user/profile", active: false },
//     {
//       icon: Bell,
//       label: "Notifications",
//       path: "/user/notifications",
//       active: false,
//     },
//   ];

//   const handleItemClick = (path) => {
//     navigate(path); // navigate to respective route
//   };

//   const handleLogout = () => {
//     console.log("Logout clicked");
//     navigate("/login"); // optional: redirect to login page
//   };

//   return (
//     <div className="sidebar">
//       <div className="sidebar-menu">
//         {sidebarItems.map((item, index) => (
//           <div
//             key={index}
//             onClick={() => handleItemClick(item.path)}
//             className={`sidebar-item ${item.active ? "active" : ""}`}
//           >
//             <item.icon size={20} />
//             <span>{item.label}</span>
//           </div>
//         ))}
//       </div>

//       {/* Log Out Button */}
//       <div className="sidebar-logout" onClick={handleLogout}>
//         <LogOut size={20} />
//         <span>Log Out</span>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import {
  LayoutGrid,
  CreditCard,
  BarChart3,
  Grid3x3,
  CheckSquare,
  User,
  Bell,
  LogOut,
} from "lucide-react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0); // default: Overview active

  const sidebarItems = [
    { icon: LayoutGrid, label: "Overview", path: "/user/dashboard" },
    { icon: CreditCard, label: "Transactions", path: "/user/transaction" },
    { icon: BarChart3, label: "Charts", path: "/user/charts" },
    { icon: Grid3x3, label: "Category", path: "/user/category" },
    { icon: CheckSquare, label: "To-Do-List", path: "/user/todo" },
    { icon: User, label: "Profile", path: "/user/profile" },
    { icon: Bell, label: "Notifications", path: "/user/notifications" },
  ];

  const handleItemClick = (path, index) => {
    setActiveIndex(index); // dynamically update active item
    navigate(path);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleItemClick(item.path, index)}
            className={`sidebar-item ${activeIndex === index ? "active" : ""}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="sidebar-logout" onClick={handleLogout}>
        <LogOut size={20} />
        <span>Log Out</span>
      </div>
    </div>
  );
};

export default Sidebar;
