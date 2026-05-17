import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Tickets
      </NavLink>
      <NavLink to="/create" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        New Ticket
      </NavLink>
    </nav>
  );
};

export default Navbar;
