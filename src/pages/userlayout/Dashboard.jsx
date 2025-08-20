import Body from "./Body.jsx";
import Sidebar from "./Sidebar.jsx";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-layout">
      {/* <Sidebar /> */}
      <div className="dashboard-content">
        {/* <h1 className="welcome-text">Welcome, Rukesh</h1>
        <button className="add-transaction-btn">+ Add Transactions</button> */}
        {/* <div className="dashboard-header">
          <h1 className="welcome-text">Welcome, Rukesh</h1>
          <button className="add-transaction-btn">+ Add Transactions</button>
        </div> */}
        <Body />
      </div>
    </div>
  );
}
