import { Link, NavLink, useNavigate } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  textDecoration: isActive ? "underline" : "none",
  fontWeight: isActive ? "700" : "500",
  marginRight: "12px",
});

export default function Navbar() {
  const navigate = useNavigate();
  const total = 0; // valor estático por ahora

  return (
    <header style={{ display: "flex", gap: 16, alignItems: "center", padding: 16, borderBottom: "1px solid #eee" }}>
      <Link to="/" style={{ fontWeight: 800, fontSize: 18 }}>🍕 Pizzería</Link>

      <nav style={{ flex: 1 }}>
        <NavLink to="/" style={linkStyle} end>Inicio</NavLink>
        <NavLink to="/register" style={linkStyle}>Registro</NavLink>
        <NavLink to="/login" style={linkStyle}>Login</NavLink>
        <NavLink to="/profile" style={linkStyle}>Perfil</NavLink>
        {/* Nota: no agregamos /pizza/p001 aquí */}
      </nav>

      <button
        onClick={() => navigate("/cart")}
        style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #ddd", cursor: "pointer" }}
      >
        🛒 Total: ${total}
      </button>
    </header>
  );
}
