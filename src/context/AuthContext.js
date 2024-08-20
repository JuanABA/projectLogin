import { jwtDecode } from "jwt-decode";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading] = useState(true);
  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", username);
        setUser(username);
        navigate("/");
      } else {
        alert("Invalid credentials");
        navigate("/login");
      }
    } catch (error) {
      console.error("Failed to login", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        logout();
      } else {
        setUser(decodedToken.username);
      }
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, token }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for accessing the context
export const useAuth = () => {
  return useContext(AuthContext);
};
