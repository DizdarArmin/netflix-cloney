import { Navigate, Outlet } from "react-router";
import { useAuth } from "../state/AuthContext";

export default function Logged({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/browse" /> : children;
}
