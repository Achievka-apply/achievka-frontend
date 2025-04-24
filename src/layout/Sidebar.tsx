import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-25 bg-dark">
      <h2 className="text-light">Achievka</h2>
      <nav className="bg-dark d-flex flex-column">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/documents">Documents</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
