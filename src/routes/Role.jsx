import { Navigate, Outlet } from "react-router";
import { useAuth } from "../state/AuthContext";

export default function Role({ children }) {
  const { userData } = useAuth();
  return userData.role === "manager" ? children : <Navigate to="/login" />;
}
