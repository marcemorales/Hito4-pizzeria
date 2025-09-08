export default function CardPizza({ pizza, onAdd }) {
  return (
    <article className="card">
      <img src={pizza.img} alt={pizza.name} />
      <div className="body">
        <h3 style={{margin:0}}>{pizza.name}</h3>
        <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
          {pizza.ingredients?.map((i) => (
            <span key={i} className="badge">🍄 {i}</span>
          ))}
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:8}}>
          <span className="price">${(pizza.price ?? 0).toLocaleString('es-CL')}</span>
          <button className="button" onClick={() => onAdd?.(pizza)}>Añadir</button>
        </div>
      </div>
    </article>
  )
}
