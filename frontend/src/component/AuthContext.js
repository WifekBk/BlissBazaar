// AuthContext.js
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // If a token exists in local storage, consider the user authenticated
      setAuth(true);
    } else {
      // If no token exists, the user is not authenticated
      setAuth(false);
    }
  }, []);

  const login = (token, userEmail) => {
    // Store the token in local storage and mark the user as authenticated
    localStorage.setItem("token", token);
    setEmail(userEmail);
    setAuth(true);
  };

  const logout = () => {
    // Remove the token from local storage and mark the user as not authenticated
    localStorage.removeItem("token");
    setEmail("");
    setAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, email, setEmail, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
