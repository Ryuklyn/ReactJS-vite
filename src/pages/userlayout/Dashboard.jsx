import Body from "./Body.jsx";
import Sidebar from "./Sidebar.jsx";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-layout">
      {/* <Sidebar /> */}
      <div className="dashboard-content">
        <Body />
      </div>
    </div>
  );
}
