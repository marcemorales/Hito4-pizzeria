import { useUser } from "../context/UserContext";

export default function Cart() {
  const { token } = useUser();
  const total = 0; // ejemplo

  return (
    <section>
      <h1>Carrito</h1>
      <p>Total a pagar: ${total}</p>
      <button className="btn-pay" disabled={!token}>Pagar</button>
      {!token && <p style={{color: "crimson"}}>Debes iniciar sesión para pagar.</p>}
    </section>
  );
}
