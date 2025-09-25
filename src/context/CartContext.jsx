import { createContext, useContext, useMemo, useReducer } from "react";

// Item shape: { id, name, price, img, ingredients, qty }
const CartStateContext = createContext(undefined);
const CartDispatchContext = createContext(undefined);

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
    case "REMOVE_ONE": {
      const id = action.payload;
      const items = state.items
        .map(i => i.id === id ? { ...i, qty: i.qty - 1 } : i)
        .filter(i => i.qty > 0);
      return { ...state, items };
    }
    case "REMOVE_ALL": {
      const id = action.payload;
      const items = state.items.filter(i => i.id != id);
      return { ...state, items };
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

  const total = useMemo(
    () => state.items.reduce((sum, i) => sum + (i.price ?? 0) * (i.qty ?? 0), 0),
    [state.items]
  );

  const value = useMemo(() => ({
    items: state.items,
    total,
    add: (p) => dispatch({ type: "ADD", payload: p }),
    removeOne: (id) => dispatch({ type: "REMOVE_ONE", payload: id }),
    removeAll: (id) => dispatch({ type: "REMOVE_ALL", payload: id }),
    clear: () => dispatch({ type: "CLEAR" }),
  }), [state.items, total]);

  return (
    <CartStateContext.Provider value={value}>
      {children}
    </CartStateContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartStateContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}