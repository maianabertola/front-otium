import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextWrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    authentificationUser();
  }, []);

  const authentificationUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.get("", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
      value={{ user, setUser, isLoggedIn, isLoading, setToken: updateToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextWrapper };
