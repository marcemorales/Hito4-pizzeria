import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section style={{ textAlign: "center", padding: "48px 16px" }}>
      <h1>404</h1>
      <p>Ups… la página que buscas no existe.</p>
      <Link to="/" style={{ display: "inline-block", marginTop: 12, textDecoration: "underline" }}>
        Volver al inicio
      </Link>
    </section>
  );
}
