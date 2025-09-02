
import { createContext, useState } from "react";
import { doctors } from "../src/assets/assets.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [user, setUser] = useState(() => {
  try {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  } catch {
    localStorage.removeItem("user");
    return null;
  }
});


  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser ,doctors}}>
      {children}
    </AuthContext.Provider>
  );
};

