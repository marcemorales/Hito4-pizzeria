
# 🍕 Hito 6: Pizzería Mamma Mía

Proyecto desarrollado en **React + Vite** para el curso, donde se implementa **manejo de estado global con Context API**.  
En este hito se integró un **carrito de compras global**, accesible desde cualquier parte de la aplicación.

---

## 🚀 Tecnologías utilizadas
- [React 18](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- [React Router DOM v6](https://reactrouter.com/)  
- Context API (estado global)  
- CSS simple (sin frameworks externos)

---

## 📦 Instalación y ejecución
Clona el repositorio e instala dependencias:

```bash
npm install
npm run dev
```

La aplicación quedará disponible en [http://localhost:5173](http://localhost:5173).

---

## ✅ Requerimientos del Hito 6

1. **Context para carrito de compras**  
   - Implementado en `CartContext.jsx` con `useReducer`.

2. **Navbar consume el contexto**  
   - Muestra el **total del carrito** en tiempo real.

3. **Home añade productos al carrito**  
   - Cada card de pizza tiene un botón **Añadir**.

4. **Página Cart**  
   - Lista productos agregados.  
   - Permite **sumar/restar**, **eliminar** y **vaciar carrito**.

5. **Total consistente**  
   - El total mostrado en el **Navbar** coincide con el de **Cart**.

6. **(Opcional)** Context para pizzas  
   - Por ahora se cargan desde `public/pizzas.json`.


---
Marcela Morales Peralta 
