
# 🍕 Hito 8: Pizzería Mamma Mía

Se cambió: 

- Cliente API (src/api.js): helper con authLogin, authRegister, authMe y postCheckout usando Authorization: Bearer <token>.

- UserContext (src/context/UserContext.jsx):

login, register, logout, fetchProfile.

Guarda token y email en localStorage.

Verifica el token con /api/auth/me al montar.

- CartContext simplificado y completo (se añadió CartProvider y helpers).

- Login.jsx / Register.jsx: usan los métodos del contexto; redirigen a /profile al éxito y muestran errores.

- Profile.jsx: muestra email y botón Cerrar sesión (usa logout real).

- Navbar.jsx: botón Logout que cierra sesión y vuelve a Home.

- Cart.jsx: envía el carrito a /api/checkouts con el token; si sale bien muestra mensaje de éxito y limpia el carro.

- App.jsx: envuelve todo con UserProvider y CartProvider, rutas protegidas con ProtectedRoute y públicas con PublicOnlyRoute.

Añade soporte de VITE_API_URL (o usa http://localhost:5000 por defecto).

## Las rutas útiles:

POST /api/auth/register → { token, email }

POST /api/auth/login → { token, email }

GET /api/auth/me → { email } (requiere Bearer token)

POST /api/checkouts → simula compra; body { cart: [...] } + Bearer token

## Cómo validar cada requerimiento

1. UserContext – login/register
Ya implementados; guardan token y email en estado y localStorage.

2. logout
Limpia token y email (estado + localStorage). Usado en Navbar y Profile.

3. perfil (me)
Método fetchProfile() y verificación automática al montar.

4. Páginas Login/Register
Invocan los métodos del contexto y redirigen a /profile.

5. Página Profile
Muestra el email y botón Cerrar sesión.

6. Botón logout del navbar
Llama a logout() y navega a /.

7. Cart.jsx → /api/checkouts
Botón Pagar envía { cart: items } con Bearer token.

8. Mensaje de éxito
Si la compra responde OK, muestra “Compra realizada con éxito 🎉” y vacía el carrito.
---

La aplicación quedará disponible en [http://localhost:5173](http://localhost:5173).

---
Marcela Morales Peralta 
