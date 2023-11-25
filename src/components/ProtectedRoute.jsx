/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../config/AuthContex";

export function ProtectedRoute({ children }) {

  const { user } = useAuth();


  if (!user) return <Navigate to="/signIn" />;

  return <>{children}</>;
}