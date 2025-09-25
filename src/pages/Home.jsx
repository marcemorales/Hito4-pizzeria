import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza.jsx";

import { useCart } from "../context/CartContext.jsx";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const { add } = useCart();

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("/pizzas.json");
        if (!res.ok) throw new Error("Error al cargar pizzas");
        const data = await res.json();
        if (alive) setPizzas(data);
      } catch (e) {
        setErr(e.message);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  if (loading) return <p style={{padding:'1rem'}}>Cargando pizzas…</p>;
  if (err) return <p style={{padding:'1rem', color:'crimson'}}>Error: {err}</p>;

  return (
    <main className="container">
      <section className="hero">
        <h1>Pizzería Mamma Mía</h1>
        <p>Las mejores pizzas artesanales, con ingredientes frescos y masa madre.</p>
      </section>
      <section className="grid">
        {pizzas.map(p => (
          <CardPizza key={p.id} pizza={p} onAdd={() => add(p)} />
        ))}
      </section>
    </main>
  );
}
