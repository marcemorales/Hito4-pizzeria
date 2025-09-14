export default function Profile() {
  const userEmail = "usuario@ejemplo.com";
  const handleLogout = () => alert("Sesión cerrada (simulada)");

  return (
    <section>
      <h1>Perfil</h1>
      <p><strong>Email:</strong> {userEmail}</p>
      <button onClick={handleLogout} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #ddd" }}>
        Cerrar sesión
      </button>
    </section>
  );
}
