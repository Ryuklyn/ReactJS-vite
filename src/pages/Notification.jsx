import { useState } from "react";
import NotificationItem from "../component/notification/NotificationItem";
const Notification = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Your payment of $200 was successful.", read: false },
    {
      id: 2,
      text: "Reminder: Meeting with your financial advisor tomorrow.",
      read: true,
    },
    {
      id: 3,
      text: "New budget recommendation available for August.",
      read: false,
    },
    {
      id: 4,
      text: "Your insurance policy renewal is due next week.",
      read: true,
    },
  ]);

  // Toggle read/unread
  const toggleRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, read: !notif.read } : notif
      )
    );
  };

  // Delete single notification
  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        width: "100%",
        marginTop: "32px",
        marginLeft: "32px",
        maxWidth: "1200px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#374151",
            margin: 0,
          }}
        >
          🔔 Notifications
        </h2>

        <button
          onClick={() => setNotifications([])}
          style={{
            backgroundColor: "#ef4444",
            color: "white",
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Clear All
        </button>
      </div>

      {/* Notifications List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {notifications.length === 0 ? (
          <p style={{ color: "#6b7280", fontSize: "14px" }}>
            No notifications available.
          </p>
        ) : (
          notifications.map((notif) => (
            <NotificationItem
              key={notif.id}
              notif={notif}
              toggleRead={toggleRead}
              deleteNotification={deleteNotification}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Notification;
