import { useAuth } from "../lib/AuthContext";
import { Navigate } from "react-router-dom";
import UserNotRegisteredError from "./UserNotRegisteredError";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <UserNotRegisteredError />;
  }

  return children;
}
