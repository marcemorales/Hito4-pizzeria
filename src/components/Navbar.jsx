
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { token, logout } = useUser();
  const navigate = useNavigate();

  const activeStyle = ({ isActive }) => ({
    textDecoration: isActive ? "underline" : "none",
    fontWeight: isActive ? 700 : 500,
    marginRight: 12,
  });

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav style={{display:"flex", gap:16, padding:12, borderBottom:"1px solid #eee"}}>
      <Link to="/">🍕 Pizzería</Link>
      <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
        <NavLink to="/" style={activeStyle}>Home</NavLink>
        <NavLink to="/cart" style={activeStyle}>Cart</NavLink>
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
