import { createContext, useEffect, useState } from "react";
import service from "../service/service";
import axios from "axios";

export const AuthContext = createContext();
const AuthContextWrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  useEffect(() => {
    authentificationUser();
  }, []);

  // console.log("token", token);
  // console.log("LoogedIn?", isLoggedIn);

  const authentificationUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.get("//localhost:3000/auth/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setToken(token);
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

export { AuthContextWrapper };
