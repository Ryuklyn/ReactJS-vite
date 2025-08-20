// const NotificationItem= ()=>{

// }
// src/component/notifications/NotificationItem.jsx
const NotificationItem = ({ notif, toggleRead, deleteNotification }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 16px",
        borderRadius: "8px",
        backgroundColor: notif.read ? "#f9fafb" : "#e0f2fe", // unread = light blue
        border: "1px solid #e5e7eb",
      }}
    >
      {/* Notification text */}
      <p
        style={{
          margin: 0,
          fontSize: "14px",
          color: notif.read ? "#6b7280" : "#111827",
          fontWeight: notif.read ? "400" : "600",
        }}
      >
        {notif.text}
      </p>

      {/* Actions */}
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => toggleRead(notif.id)}
          style={{
            backgroundColor: notif.read ? "#10b981" : "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            padding: "6px 12px",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          {notif.read ? "Unread" : "Mark Read"}
        </button>
        <button
          onClick={() => deleteNotification(notif.id)}
          style={{
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "6px",
            padding: "6px 12px",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NotificationItem;
