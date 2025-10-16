
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, loading, error } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ email, password });
      navigate("/profile");
    } catch {}
  };

  return (
    <section>
      <h1>Crear cuenta</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: 16, display: "grid", gap: 8, maxWidth: 360 }}>
        <input placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <input placeholder="Contraseña" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        <button type="submit" disabled={loading}>{loading ? "Creando..." : "Registrarme"}</button>
        {error && <small style={{ color: "crimson" }}>{error}</small>}
      </form>
    </section>
  );
}
