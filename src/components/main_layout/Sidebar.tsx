import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-25 bg-dark">
      <h2 className="text-light">Achievka</h2>
      <nav className="bg-dark d-flex flex-column">
        <NavLink to="/app">Dashboard</NavLink>
        <NavLink to="/app/university">Search</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
