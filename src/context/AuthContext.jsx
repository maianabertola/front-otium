import { createContext, useEffect, useState } from "react";
import service from "../service/service";
const AuthContext = createContext();

export const AuthCOntext = createContext()
const AuthContextWrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("")

  useEffect(() => {
    authentificationUser();
  }, []);

  const authentificationUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await service.get("/auth/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setToken(token)
        setUser(response.data);
        setIsLoggedIn(true);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
      setUser(null);
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  };

  const updateToken = (token) => {
    localStorage.setItem("token", token);
    checkLogin(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        isLoading,
        authentificationUser,
        setToken: updateToken,
        logout,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextWrapper, AuthContext };
