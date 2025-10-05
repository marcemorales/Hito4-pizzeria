import { Link } from "react-router-dom";

export default function CardPizza({ pizza, onAdd }) {
  return (
    <article className="card">
      <img src={pizza.img} alt={pizza.name} />
      <div className="card-body">
        <h3>{pizza.name}</h3>
        <p>Precio: ${pizza.price}</p>
        <ul>
          {pizza.ingredients?.map((ing) => <li key={ing}>{ing}</li>)}
        </ul>
        <div className="actions">
          <Link to={`/pizza/${pizza.id}`} className="btn">Ver detalle</Link>
          {onAdd && <button className="btn" onClick={onAdd}>Agregar</button>}
        </div>
      </div>
    </article>
  );
}
