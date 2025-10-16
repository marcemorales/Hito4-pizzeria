
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { authLogin, authRegister, authMe } from "../api";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [email, setEmail] = useState(() => localStorage.getItem("email") || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Verify token on mount (optional)
  useEffect(() => {
    const verify = async () => {
      if (!token) return;
      try {
        const me = await authMe(token);
        if (me?.email) {
          setEmail(me.email);
          localStorage.setItem("email", me.email);
        }
      } catch {
        // invalid token -> logout
        setToken(null);
        setEmail(null);
        localStorage.removeItem("token");
        localStorage.removeItem("email");
      }
    };
    verify();
  }, []); // run only on first mount

  const login = async ({ email, password }) => {
    setLoading(true); setError(null);
    try {
      const data = await authLogin({ email, password });
      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      return data;
    } catch (e) {
      setError(e.message);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const register = async ({ email, password }) => {
    setLoading(true); setError(null);
    try {
      const data = await authRegister({ email, password });
      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      return data;
    } catch (e) {
      setError(e.message);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const fetchProfile = async () => {
    if (!token) throw new Error("No hay token");
    return authMe(token)
      .then((me) => {
        if (me?.email) {
          setEmail(me.email);
          localStorage.setItem("email", me.email);
        }
        return me;
      });
  };

  const value = useMemo(() => ({
    token,
    email,
    loading,
    error,
    login,
    register,
    logout,
    fetchProfile,
  }), [token, email, loading, error]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser debe usarse dentro de <UserProvider>");
  return ctx;
}
