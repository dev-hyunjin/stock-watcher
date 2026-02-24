import { Outlet } from "react-router-dom";
import Header from "../components/common/Header.jsx";
import SideNav from "../components/common/SideNav.jsx";

export default function AppLayout() {
  return (
    <div className="app-shell">
      <SideNav />
      <div className="app-main">
        <Header />
        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}