import { useEffect, useState } from "react";

export default function Pizza() {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const id = "p001"; // fijo para Hito 4
    (async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!res.ok) throw new Error("No se pudo cargar la pizza");
        const data = await res.json();
        setPizza(data);
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p style={{padding:'1rem'}}>Cargando pizza…</p>;
  if (err) return <p style={{padding:'1rem', color:'crimson'}}>Error: {err}</p>;
  if (!pizza) return null;

  return (
    <article style={{maxWidth:900, margin:'2rem auto', display:'grid', gap:'1rem', gridTemplateColumns:'1fr 1.2fr'}}>
      <img src={pizza.img} alt={pizza.name} style={{width:'100%', borderRadius:12}} />
      <div>
        <h2>{pizza.name}</h2>
        <p style={{opacity:.8, margin:'0.25rem 0 1rem'}}>{pizza.desc}</p>
        <h3>Ingredientes</h3>
        <ul>
          {pizza.ingredients?.map((ing) => <li key={ing}>{ing}</li>)}
        </ul>
        <p style={{fontWeight:700, fontSize:'1.25rem', marginTop:'1rem'}}>
          Precio: ${pizza.price?.toLocaleString("es-CL")}
        </p>
        <button disabled className="button" style={{marginTop:'1rem'}}>Añadir al carrito</button>
      </div>
    </article>
  );
}
