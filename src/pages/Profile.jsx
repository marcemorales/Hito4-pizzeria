
import { useUser } from "../context/UserContext";

export default function Profile() {
  const { email, logout } = useUser();
  return (
    <section>
      <h1>Perfil</h1>
      <p><strong>Email:</strong> {email}</p>
      <button onClick={logout} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #ddd" }}>
        Cerrar sesión
      </button>
    </section>
  );
}
