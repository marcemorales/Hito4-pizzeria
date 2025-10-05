import { NavLink, Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { token, logout } = useUser();
  const navigate = useNavigate();

  const activeStyle = ({ isActive }) => ({
    textDecoration: isActive ? "underline" : "none",
    fontWeight: isActive ? 700 : 500,
  });

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="brand">Hito Pizzería</Link>
      <div className="links">
        <NavLink to="/" style={activeStyle}>Home</NavLink>
        <NavLink to="/cart" style={activeStyle}>Total</NavLink>

        {token ? (
          <>
            <NavLink to="/profile" style={activeStyle}>Profile</NavLink>
            <button type="button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" style={activeStyle}>Login</NavLink>
            <NavLink to="/register" style={activeStyle}>Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
