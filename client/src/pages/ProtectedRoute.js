import {  Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ children }) {
  const auth = useAuth();
  return auth.user ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
