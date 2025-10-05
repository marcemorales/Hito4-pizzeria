import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function PublicOnlyRoute({ children }) {
  const { token } = useUser();
  return token ? <Navigate to="/" replace /> : children;
}
