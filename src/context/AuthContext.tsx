import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import axios from "axios";

interface User {
  name: string;
  surname: string;
  email: string;
  username: string;
}

interface AuthContextType {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  useEffect(() => {
    if (token) {
      axios.get("http://localhost:8080/api/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => setUser(res.data))
        .catch(() => {
          localStorage.removeItem("token");
          setUser(null);
        });
    }
  }, [token]);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    console.log("Chiamata a /api/me con token:", token);
    axios.get("http://localhost:8080/api/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
    console.log("Dati utente ricevuti:", res.data);
    setUser(res.data);
    });
    };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};