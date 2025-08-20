import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export const UserLayout = () => {
  return (
    // <div className="flex min-h-screen bg-gray-50">
    //   <Sidebar />
    //   <div className="flex-1">
    //     <Header userName="Rukesh" />
    //     <Outlet />
    //   </div>
    // </div>
    <div style={{ display: "flex" }}>
      {/* Sidebar - fixed width */}
      <div className="w-64 bg-white border-r">
        <Sidebar />
      </div>

      {/* Main Content - grows */}
      <div className="flex-1 flex flex-col" style={{ width: "290vh" }}>
        {/* Header always on top */}
        <Header userName="Rukesh" />

        {/* Outlet renders Dashboard / Transactions etc */}
        <main className="flex-1 p-6 overflow-y-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
