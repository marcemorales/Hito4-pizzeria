
import { createContext, useContext, useMemo, useReducer } from "react";

// Item shape: { id, name, price, img, ingredients, qty }
const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const p = action.payload;
      const exists = state.items.find(i => i.id === p.id);
      const items = exists
        ? state.items.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i)
        : [...state.items, { ...p, qty: 1 }];
      return { ...state, items };
    }
    case "INC": {
      const id = action.payload;
      return { ...state, items: state.items.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i) };
    }
    case "DEC": {
      const id = action.payload;
      return { ...state, items: state.items.flatMap(i => {
        if (i.id !== id) return [i];
        const nextQty = i.qty - 1;
        return nextQty <= 0 ? [] : [{ ...i, qty: nextQty }];
      }) };
    }
    case "REMOVE": {
      const id = action.payload;
      return { ...state, items: state.items.filter(i => i.id !== id) };
    }
    case "CLEAR":
      return { ...state, items: [] };
    default:
      return state;
  }
}

const initialState = { items: [] };

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const total = state.items.reduce((acc, i) => acc + i.price * i.qty, 0);

  const value = useMemo(() => ({
    items: state.items,
    total,
    add: (p) => dispatch({ type: "ADD", payload: p }),
    inc: (id) => dispatch({ type: "INC", payload: id }),
    dec: (id) => dispatch({ type: "DEC", payload: id }),
    remove: (id) => dispatch({ type: "REMOVE", payload: id }),
    clear: () => dispatch({ type: "CLEAR" }),
  }), [state.items, total]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
