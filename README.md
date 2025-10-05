
# 🍕 Hito 7: Pizzería Mamma Mía

Cambios aplicados sobre el Hito 6:

- `useParams` en `src/pages/Pizza.jsx` + fetch a **GET /api/pizzas/:id**.
- `UserContext` con `token` (true por defecto) + métodos `login` y `logout`.
- Navbar usa `UserContext` y muestra **Profile/Logout** o **Login/Register**.
- `Cart.jsx` deshabilita **Pagar** si `token === false`.
- Rutas protegidas: `/profile` protegida y `/login`/`/register` públicas‑solo.
- `CardPizza.jsx` enlaza a `/pizza/:id`.

## Cómo probar
1. Instala dependencias y ejecuta:
   ```bash
   npm i
   npm run dev
   ```
2. Hay que asegurarse de tener el endpoint funcionando en `/api/pizzas/:id`. Si el backend corre en otro puerto, hay que configurar el proxy de Vite o usa URL absoluta.
3. Visita `/pizza/<id>` usando un `id` válido.
4. En Navbar, prueba **Logout** para ver cómo cambian los botones y el botón **Pagar** en el carrito.

---

La aplicación quedará disponible en [http://localhost:5173](http://localhost:5173).

---
Marcela Morales Peralta 
