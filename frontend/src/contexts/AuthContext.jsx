import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  let logoutTimer;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    const expiration = localStorage.getItem("tokenExpiration");

    if (storedUser && storedToken && expiration) {
      const expiresAt = new Date(expiration);
      const now = new Date();

      if (expiresAt > now) {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
        const timeout = expiresAt.getTime() - now.getTime();
        logoutTimer = setTimeout(logout, timeout);
      } else {
        logout();
      }
    }
  }, []);

  const login = (userData, token) => {
    const expiration = new Date(new Date().getTime() + 2 * 60 * 1000); // 2 minutes

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
    localStorage.setItem("tokenExpiration", expiration.toISOString());

    setUser(userData);
    setToken(token);

    logoutTimer = setTimeout(logout, 2 * 60 * 1000); // 2 minutes
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
    setUser(null);
    setToken(null);
    if (logoutTimer) clearTimeout(logoutTimer);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
