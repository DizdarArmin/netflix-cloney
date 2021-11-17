import { Navigate, Outlet } from "react-router";
import { useAuth } from "../state/AuthContext";

export default function Private() {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
