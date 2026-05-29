import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState({ name: "Mia" });

  const signOut = () => setUser(null);

  return <AuthContext.Provider value={{ user, signOut }}>{children}</AuthContext.Provider>;
}
