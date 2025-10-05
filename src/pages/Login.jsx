import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate("/");
  };

  return (
    <section>
      <h1>Login</h1>
      <p>Formulario de login (pendiente de autenticación).</p>
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input placeholder="Email" required />
        <input placeholder="Contraseña" type="password" required />
        <button type="submit">Ingresar</button>
      </form>
    </section>
  );
}
