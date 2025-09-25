import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const linkStyle = ({ isActive }) => ({
  textDecoration: isActive ? "underline" : "none",
  fontWeight: isActive ? "700" : "500",
  marginRight: "12px",
});

export default function Navbar() {
  const navigate = useNavigate();
  const { total } = useCart();

  return (
    <header style={{ display: "flex", gap: 16, alignItems: "center", padding: 16, borderBottom: "1px solid #eee" }}>
      <Link to="/" style={{ fontWeight: 800, fontSize: 18 }}>🍕 Pizzería</Link>
      <nav style={{ display: "flex", alignItems: "center" }}>
        <NavLink to="/" style={linkStyle} end>Home</NavLink>
        <NavLink to="/register" style={linkStyle}>Registro</NavLink>
        <NavLink to="/login" style={linkStyle}>Login</NavLink>
        <NavLink to="/profile" style={linkStyle}>Perfil</NavLink>
      </nav>

      <button
        onClick={() => navigate("/cart")}
        style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #ddd", cursor: "pointer", marginLeft: "auto" }}
      >
        🛒 Total: ${total.toLocaleString('es-CL')}
      </button>
    </header>
  );
}