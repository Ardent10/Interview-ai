import { Outlet } from "react-router-dom";
import Navbar from "../../common/layout/Navbar";
import Sidebar from "../../common/layout/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="p-6 min-h-screen bg-background">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
