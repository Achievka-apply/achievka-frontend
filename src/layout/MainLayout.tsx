import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Outlet /> {/* Здесь будут меняться страницы */}
      </div>
    </div>
  );
};

export default MainLayout;
