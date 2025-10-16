
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useCart } from "../context/CartContext";
import { postCheckout } from "../api";

export default function Cart() {
  const { token } = useUser();
  const { items, total, clear } = useCart();
  const [status, setStatus] = useState(null); // 'ok' | 'error' | null
  const [message, setMessage] = useState("");

  const handlePay = async () => {
    try {
      const res = await postCheckout({ cart: items, token });
      setStatus("ok");
      setMessage(res?.message || "Compra realizada con éxito 🎉");
      clear();
    } catch (e) {
      setStatus("error");
      setMessage(e.message);
    }
  };

  return (
    <section>
      <h1>Carrito</h1>
      <ul>
        {items.map(i => (
          <li key={i.id}>
            {i.name} x{i.qty} — ${i.price * i.qty}
          </li>
        ))}
      </ul>
      <p><strong>Total a pagar:</strong> ${total}</p>
      <button className="btn-pay" disabled={!token || items.length===0} onClick={handlePay}>
        Pagar
      </button>
      {!token && <p style={{color: "crimson"}}>Debes iniciar sesión para pagar.</p>}
      {status === "ok" && <p style={{ color: "green", marginTop: 8 }}>{message}</p>}
      {status === "error" && <p style={{ color: "crimson", marginTop: 8 }}>{message}</p>}
    </section>
  );
}
