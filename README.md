# Hito 4: Pizzería Mamma Mía (Proyecto con **Vite + React**)

Cumple con:
- Home (`/src/pages/Home.jsx`) consume **GET http://localhost:5000/api/pizzas** con `useEffect` y renderiza tarjetas.
- Detalle (`/src/components/Pizza.jsx`) consume **GET http://localhost:5000/api/pizzas/p001** con `useEffect` y muestra nombre, precio, ingredientes, imagen y descripción (botón Añadir deshabilitado).

> Requisitos del Hito 4: usar el backend de apoyo (puerto 5000), hacer fetch con `useEffect` en Home y Pizza, mostrar los campos indicados.

## 1) Backend (material de apoyo)
En la carpeta del backend de apoyo:
```bash
npm install
npm start     # http://localhost:5000
```

## 2) Frontend
En este proyecto:
```bash
npm install
npm run dev   # http://localhost:5173 (por defecto)
```

### Alternar entre Home y Pizza (como pide el hito)
- Por defecto, `src/App.jsx` muestra **Home** (Parte 1).
- Para mostrar el detalle **Pizza p001** (Parte 2): renombrar `src/AppPizza.jsx` a `src/App.jsx` (o copiar su contenido).

----
Marcela Morales Peralta
