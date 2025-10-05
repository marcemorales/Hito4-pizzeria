import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pizza() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchPizza() {
      try {
        setLoading(true);
        setError(null);

        let pizza = null;
        try {
          const res = await fetch(`/api/pizzas/${id}`, { headers: { Accept: "application/json" } });
          const ct = res.headers.get("content-type") || "";
          if (!res.ok || !ct.includes("application/json")) throw new Error("API no disponible");
          pizza = await res.json();
        } catch (_) {
          const res2 = await fetch("/pizzas.json");
          if (!res2.ok) throw new Error("No se pudo cargar pizzas.json");
          const list = await res2.json();
          pizza = list.find((p) => p.id === id);
          if (!pizza) throw new Error(`No existe la pizza con id: ${id}`);
        }

        if (!ignore) setData(pizza);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchPizza();
    return () => { ignore = true; };
  }, [id]);

  if (loading) return <p>Cargando pizza...</p>;
  if (error) return <p>Ocurrió un error: {error}</p>;
  if (!data) return null;

  return (
    <section className="pizza-detail">
      <img src={data.img} alt={data.name} />
      <div>
        <h2>{data.name}</h2>
        <p>{data.desc}</p>
        <p><strong>Precio:</strong> ${data.price}</p>
        <h4>Ingredientes</h4>
        <ul>
          {data.ingredients?.map((i) => <li key={i}>{i}</li>)}
        </ul>
      </div>
    </section>
  );
}
