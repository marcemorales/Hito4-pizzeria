import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { items, total, add, removeOne, removeAll, clear } = useCart();

  if (!items.length) {
    return (
      <section>
        <h1>Cart</h1>
        <p>Tu carrito está vacío por ahora.</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Cart</h1>
      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 12 }}>
        {items.map((i) => (
          <li key={i.id} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto auto auto', gap: 12, alignItems: 'center', border: '1px solid #eee', padding: 8, borderRadius: 8 }}>
            <img src={i.img} alt={i.name} style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 8 }} />
            <div>
              <strong>{i.name}</strong>
              <div style={{ fontSize: 12, color: '#666' }}>${(i.price ?? 0).toLocaleString('es-CL')}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button className="button" onClick={() => removeOne(i.id)}>-</button>
              <span style={{ minWidth: 24, textAlign: 'center' }}>{i.qty}</span>
              <button className="button" onClick={() => add(i)}>+</button>
            </div>
            <div style={{ minWidth: 90, textAlign: 'right' }}>${((i.price ?? 0) * (i.qty ?? 0)).toLocaleString('es-CL')}</div>
            <button className="button" onClick={() => removeAll(i.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button className="button" onClick={clear}>Vaciar carrito</button>
        <div style={{ fontSize: 20, fontWeight: 700 }}>Total: ${total.toLocaleString('es-CL')}</div>
      </div>
    </section>
  );
}