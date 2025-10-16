
// Simple API client for the pizzas backend
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function authLogin({ email, password }) {
  return fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then(handleJson);
}

export function authRegister({ email, password }) {
  return fetch(`${BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then(handleJson);
}

export function authMe(token) {
  return fetch(`${BASE_URL}/api/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(handleJson);
}

export function postCheckout({ cart, token }) {
  return fetch(`${BASE_URL}/api/checkouts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ cart }),
  }).then(handleJson);
}

function handleJson(res) {
  if (!res.ok) {
    return res.json().catch(() => ({})).then((err) => {
      const message = err?.message || `Error ${res.status}`;
      const e = new Error(message);
      e.status = res.status;
      e.details = err;
      throw e;
    });
  }
  return res.json();
}
