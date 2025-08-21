import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export const UserLayout = () => {
  const location = useLocation();
  const firstname = location.state?.firstname || "<<<->>>";
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar - fixed width */}
      <div className="w-64 bg-white border-r">
        <Sidebar />
      </div>

      {/* Main Content - grows */}
      <div className="flex-1 flex flex-col" style={{ width: "290vh" }}>
        {/* Header always on top */}
        <Header userName={firstname} />
        {console.log("User name from state:", firstname)}

        {/* Outlet renders Dashboard / Transactions etc */}
        <main className="flex-1 p-6 overflow-y-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
